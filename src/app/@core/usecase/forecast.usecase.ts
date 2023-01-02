import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../base/usecase';
import { ForecastParams } from '../domain/dto/forecast.dto';
import { Forecast } from '../domain/entity/forecast.entity';
import { ForecastRepository } from '../repository/forecast.repository';

@Injectable({
	providedIn: 'root',
})
export class GetForecastUsecase implements UseCase<ForecastParams, Forecast> {
	constructor(private forecastRepository: ForecastRepository) {}

	execute(params: ForecastParams): Observable<Forecast> {
		return this.forecastRepository.findByGeographicCoordinates(params);
	}
}
