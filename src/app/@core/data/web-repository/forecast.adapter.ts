/* eslint-disable @typescript-eslint/no-explicit-any */
import { Observable, catchError } from 'rxjs';

import { Forecast } from '../../domain/entity/forecast.entity';
import { ForecastParams } from '../../domain/dto/forecast.dto';
import { ForecastRepository } from '../../repository/forecast.repository';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from '../adapter/http-client.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class ForecastAdapter implements ForecastRepository {
	constructor(private http: HttpClient, private apiService: HttpClientService) {}

	findByGeographicCoordinates(params: ForecastParams): Observable<Forecast> {
		const url = `${environment.forecast}lat=${params.lat}&lon=${params.long}&appid=${params.apiKey}`;
		return this.http.get<Forecast>(url).pipe(catchError(this.apiService.handleError));
	}
}
