import { Component, OnInit } from '@angular/core';
import { CurrentLocationParams } from 'src/app/@core/domain/dto/current-location.dto';
import { GetCurrentLocationUsecase } from 'src/app/@core/usecase/current-location.usecase';
import { ErrorService } from 'src/app/@core/utils/services/error.service';
import { GetLocationService } from 'src/app/@core/utils/services/get-location.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-current-weather',
	templateUrl: './current-weather.component.html',
	styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
	icon!: string;
	description!: string;
	mainWeather!: string;
	nameLocation!: string;
	latitude!: number;
	longitude!: number;
	temperature!: number;
	celcius: any;
	apiKey = environment.apiKey;

	constructor(
		protected getCurrentLocationUsecase: GetCurrentLocationUsecase,
		protected getLocationService: GetLocationService,
		protected errorMessage: ErrorService
	) {}

	ngOnInit(): void {
		this.getCurrentLocation();
	}

	getCurrentLocation() {
		this.getLocationService.findLatitudeAndLongitude().then(
			(response) => {
				let params: CurrentLocationParams = {
					lat: response.lat,
					long: response.long,
					apiKey: this.apiKey,
				};
				this.getCurrentLocationUsecase.execute(params).subscribe(
					(response) => {
						this.nameLocation = response.name;
						this.mainWeather = response.weather[0].main;
						this.description = response.weather[0].description;
						this.latitude = response.coord.lat;
						this.longitude = response.coord.lon;
						this.temperature = ((response.main.temp - 32) * 5.0) / 9.0;
						this.celcius = this.temperature + '°C';
						this.icon = response.weather[0].icon;
					},
					(error) => {
						this.errorMessage.getMessage(error);
					}
				);
			},
			(error) => {
				this.errorMessage.getMessage(error);
			}
		);
	}
}
