import { Injectable } from '@angular/core';
import {
	HttpClient,
	HttpHeaders,
	HttpErrorResponse,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class HttpClientService {
	constructor(private http: HttpClient) {}

	postRequest(apiUrl: string, body: any) {
		const headers = new HttpHeaders({
			'Content-type': 'application/json',
		});

		return this.http.post<any>(apiUrl, body, { headers }).pipe(
			tap((res) => res.data),
			catchError(this.handleError)
		);
	}

	getRequest(apiUrl: string, params: any) {
		const headers = new HttpHeaders({
			'Content-type': 'application/json',
		});

		return this.http.get<any>(apiUrl, { params }).pipe(
			tap((res) => res.data),
			catchError(this.handleError)
		);
	}

	putRequest(apiUrl: string, body: any) {
		const headers = new HttpHeaders({
			'Content-type': 'application/json',
		});

		return this.http.put<any>(apiUrl, body).pipe(
			tap((res) => res.data),
			catchError(this.handleError)
		);
	}

	deleteRequest(apiUrl: string, params: any) {
		const headers = new HttpHeaders({
			'Content-type': 'application/json',
		});

		return this.http.delete<any>(apiUrl + params).pipe(
			tap((res) => res),
			catchError(this.handleError)
		);
	}

	postUpload(apiUrl: string, body: any) {
		const headers = new HttpHeaders({
			'Content-type': 'multipart/form-data;boundary=test',
		});

		return this.http.post<any>(apiUrl, body, { headers }).pipe(
			tap((res) => res.data),
			catchError(this.handleError)
		);
	}

	handleError(error: HttpErrorResponse) {
		const errorMessage = error;
		return throwError(errorMessage);
	}
}
