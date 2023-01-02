import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ForecastParams } from 'src/app/@core/domain/dto/forecast.dto';
import { List } from 'src/app/@core/domain/entity/forecast.entity';
import { GetForecastUsecase } from 'src/app/@core/usecase/forecast.usecase';
import { ErrorService } from 'src/app/@core/utils/services/error.service';
import { GetLocationService } from 'src/app/@core/utils/services/get-location.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-weather-forecast',
	templateUrl: './weather-forecast.component.html',
	styleUrls: ['./weather-forecast.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class WeatherForecastComponent implements OnInit {
	latitude!: number;
	longitude!: number;
	temperature!: number;
	icon!: string;
	date!: string;
	locationName!: string;
	panelOpenState = false;
	forecast: List[] = [];
	apiKey = environment.apiKey;

	constructor(
		protected getLocationService: GetLocationService,
		protected forecastUseCase: GetForecastUsecase,
		protected errorMessage: ErrorService
	) {}

	ngOnInit() {
		this.findAllForecast();
	}

	findAllForecast() {
		this.getLocationService.findLatitudeAndLongitude().then((response) => {
			let params: ForecastParams = {
				lat: response.lat,
				long: response.long,
				apiKey: this.apiKey,
			};
			this.forecastUseCase.execute(params).subscribe(
				(response) => {
					this.locationName = response.city.name;
					this.forecast = response.list;

					this.forecast.forEach((element) => {
						this.temperature = ((element.main.temp - 32) * 5) / 9;
						this.date = element.dt_txt;
						this.icon = element.weather[0].icon;
					});
				},
				(error) => {
					this.errorMessage.getMessage(error);
				}
			);
		});
	}
}
