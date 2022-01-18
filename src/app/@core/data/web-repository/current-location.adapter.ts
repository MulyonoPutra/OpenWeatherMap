import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, tap } from 'rxjs';
import { CurrentLocationParams } from '../../domain/dto/current-location.dto';
import { CurrentLocationRepository } from '../../repository/current-location.repository';
import { HttpClientService } from '../adapter/http-client.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentLocationAdapter implements CurrentLocationRepository {
  constructor(
    private http: HttpClient,
    private apiService: HttpClientService
  ) {}

  findCurrentLocation(params: CurrentLocationParams): Observable<any> {
    let url =
      'http://api.openweathermap.org/data/2.5/weather?lat=' +
      params.lat +
      '&lon=' +
      params.long +
      '&appid=' +
      params.apiKey;

    return this.http.get(url).pipe(
      delay(2000),
      tap((response) => {}),
      catchError(this.apiService.handleError)
    );
  }
}
