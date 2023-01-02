import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ForecastParams } from '../../domain/dto/forecast.dto';
import { ForecastRepository } from '../../repository/forecast.repository';
import { HttpClientService } from '../adapter/http-client.service';

@Injectable({
	providedIn: 'root',
})
export class ForecastAdapter implements ForecastRepository {
	constructor(
		private http: HttpClient,
		private apiService: HttpClientService
	) {}

	findByGeographicCoordinates(params: ForecastParams): Observable<any> {
		let url = `${environment.forecast}lat=${params.lat}&lon=${params.long}&appid=${params.apiKey}`;
		return this.http
			.get(url)
			.pipe(delay(500), catchError(this.apiService.handleError));
	}
}
