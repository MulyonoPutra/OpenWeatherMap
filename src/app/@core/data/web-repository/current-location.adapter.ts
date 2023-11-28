/* eslint-disable @typescript-eslint/no-explicit-any */
import { Observable, catchError } from 'rxjs';

import { CurrentLocation } from '../../domain/entity/current-location.entity';
import { CurrentLocationParams } from '../../domain/dto/current-location.dto';
import { CurrentLocationRepository } from '../../repository/current-location.repository';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from '../adapter/http-client.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class CurrentLocationAdapter implements CurrentLocationRepository {
	constructor(private http: HttpClient, private apiService: HttpClientService) {}

	findCurrentLocation(params: CurrentLocationParams): Observable<CurrentLocation> {
		const apiurl = `${environment.current}lat=${params.lat}&lon=${params.long}&appid=${params.apiKey}`;

		return this.http.get<CurrentLocation>(apiurl).pipe(catchError(this.apiService.handleError));
	}
}
