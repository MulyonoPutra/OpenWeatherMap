import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { CurrentWeatherComponent } from './pages/current-weather/current-weather.component';
import { WeatherForecastComponent } from './pages/weather-forecast/weather-forecast.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'forecast', component: WeatherForecastComponent },
  { path: 'current', component: CurrentWeatherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
