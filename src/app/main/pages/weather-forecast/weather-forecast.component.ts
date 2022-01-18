import { Component, OnInit } from '@angular/core';
import { ForecastParams } from 'src/app/@core/domain/dto/forecast.dto';
import { GetLocationService } from 'src/app/@core/services/get-location.service';
import { GetForecastUsecase } from 'src/app/@core/usecase/forecast.usecase';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  latitude!: number;
  longitude!: number;
  apiKey = environment.apiKey;

  constructor(protected getLocationService: GetLocationService, protected forecastUseCase: GetForecastUsecase) { }

  ngOnInit() {
    this.findAllForecast();
  }

  findAllForecast() {
    this.getLocationService.findLatitudeAndLongitude().then((response) => {
      let params: ForecastParams = {
        lat: response.lat,
        long: response.long,
        apiKey: this.apiKey,
      }
      this.forecastUseCase.execute(params).subscribe((response) => {
        console.log(response);
      });
    });
  }

}
