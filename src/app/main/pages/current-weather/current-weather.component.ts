import { Component, OnInit } from '@angular/core';
import { CurrentLocationParams } from 'src/app/@core/domain/dto/current-location.dto';
import { GetLocationService } from 'src/app/@core/services/get-location.service';
import { GetCurrentLocationUsecase } from 'src/app/@core/usecase/current-location.usecase';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  latitude!: number;
  longitude!: number;
  apiKey = environment.apiKey;
  nameLocation!: string;
  mainWeather!: string;
  description!: string;
  temperature!: number;
  celcius: any;
  icon!: string;


  constructor(
    protected getCurrentLocationUsecase: GetCurrentLocationUsecase,
    protected getLocationService: GetLocationService
  ) { }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    this.getLocationService.findLatitudeAndLongitude().then((response) => {
      console.log(response.lat);
      console.log(response.long);
      let params: CurrentLocationParams = {
        lat: response.lat,
        long: response.long,
        apiKey: this.apiKey,
      }
      this.getCurrentLocationUsecase.execute(params).subscribe((response) => {
        console.log(response.name);
        this.nameLocation = response.name;
        this.mainWeather = response.weather[0].main;
        this.description = response.weather[0].description;
        this.latitude = response.coord.lat;
        this.longitude = response.coord.lon;
        this.temperature = (response.main.temp - 32) * 5.0 / 9.0;
        this.celcius = this.temperature + '°C';
        this.icon = response.weather[0].icon;
      });
    });
  }

}
