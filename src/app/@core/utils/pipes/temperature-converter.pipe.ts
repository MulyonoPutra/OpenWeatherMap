import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'temperatureConverter',
})
export class TemperatureConverterPipe implements PipeTransform {
	transform(value: number, unit: string) {
		if (value && !isNaN(value)) {
			if (unit === 'C') {
				const temperature = (value - 32) / 1.8;
				return temperature.toFixed(2);
			}
			if (unit === 'F') {
				const temperature = value * 32 + 1.8;
				return temperature.toFixed(2);
			}
		}
		return;
	}
}
