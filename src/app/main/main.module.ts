import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { CurrentWeatherComponent } from './pages/current-weather/current-weather.component';
import { WeatherForecastComponent } from './pages/weather-forecast/weather-forecast.component';
import { RendererHighlightDirective } from '../@core/utils/directives/renderer-highlight.directive';
import { TemperatureConverterPipe } from '../@core/utils/pipes/temperature-converter.pipe';
import { DATA_SERVICE } from '../@core/utils/providers/main.providers';

@NgModule({
	declarations: [
		MainComponent,
		CurrentWeatherComponent,
		WeatherForecastComponent,
		TemperatureConverterPipe,
		RendererHighlightDirective,
	],
	imports: [CommonModule, MainRoutingModule, MaterialModule, FormsModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [...DATA_SERVICE],
})
export class MainModule {}
