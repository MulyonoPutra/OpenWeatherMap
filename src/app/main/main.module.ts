import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { CurrentWeatherComponent } from './pages/current-weather/current-weather.component';
import { WeatherForecastComponent } from './pages/weather-forecast/weather-forecast.component';
import { HttpClientService } from '../@core/data/adapter/http-client.service';
import { CurrentLocationAdapter } from '../@core/data/web-repository/current-location.adapter';
import { CurrentLocationRepository } from '../@core/repository/current-location.repository';
import { TemperatureConverterPipe } from '../@core/pipes/temperature-converter.pipe';
import { ForecastRepository } from '../@core/repository/forecast.repository';
import { ForecastAdapter } from '../@core/data/web-repository/forecast.adapter';

const DATA_SERVICE: Provider[] = [
  HttpClientService,
  { provide: CurrentLocationRepository, useClass: CurrentLocationAdapter },
  { provide: ForecastRepository, useClass: ForecastAdapter }
]
@NgModule({
  declarations: [
    MainComponent,
    CurrentWeatherComponent,
    WeatherForecastComponent, TemperatureConverterPipe
  ],
  imports: [CommonModule, MainRoutingModule, MaterialModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [...DATA_SERVICE]
})
export class MainModule { }
