import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../base/usecase';
import { CurrentLocationParams } from '../domain/dto/current-location.dto';
import { CurrentLocation } from '../domain/entity/current-location.entity';
import { CurrentLocationRepository } from '../repository/current-location.repository';

@Injectable({
	providedIn: 'root',
})
export class GetCurrentLocationUsecase implements UseCase<CurrentLocationParams, CurrentLocation> {
	constructor(private currentLocationRepository: CurrentLocationRepository) {}

	execute(params: CurrentLocationParams): Observable<CurrentLocation> {
		return this.currentLocationRepository.findCurrentLocation(params);
	}
}
