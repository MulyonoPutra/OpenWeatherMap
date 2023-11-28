/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

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
		return this.http.get<any>(apiUrl, { params }).pipe(
			tap((res) => res.data),
			catchError(this.handleError)
		);
	}

	putRequest(apiUrl: string, body: any) {
		return this.http.put<any>(apiUrl, body).pipe(
			tap((res) => res.data),
			catchError(this.handleError)
		);
	}

	deleteRequest(apiUrl: string, params: any) {
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
