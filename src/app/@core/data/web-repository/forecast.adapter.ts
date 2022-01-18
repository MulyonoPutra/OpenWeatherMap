import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, tap } from 'rxjs';
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
    let apiurl =
      'http://api.openweathermap.org/data/2.5/forecast?lat=' +
      params.lat +
      '&lon=' +
      params.long +
      '&appid=' +
      params.apiKey;

    return this.http
      .get(apiurl)
      .pipe(delay(500), catchError(this.apiService.handleError));
  }
}
