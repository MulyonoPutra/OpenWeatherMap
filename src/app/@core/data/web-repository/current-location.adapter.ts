import { Observable, catchError } from 'rxjs';

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

	findCurrentLocation(params: CurrentLocationParams): Observable<any> {
		let apiurl = `${environment.current}lat=${params.lat}&lon=${params.long}&appid=${params.apiKey}`;

		return this.http.get(apiurl).pipe(catchError(this.apiService.handleError));
	}
}
