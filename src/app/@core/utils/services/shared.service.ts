import { Injectable } from '@angular/core';

export interface GeoLocation {
	lat: number;
	long: number;
}

@Injectable({
	providedIn: 'root',
})
export class SharedService {
	private geoLocation!: GeoLocation;

	setGeoLocation(data: GeoLocation): void {
		this.geoLocation = data;
	}

	getGeoLocation(): GeoLocation {
		return this.geoLocation;
	}
}
