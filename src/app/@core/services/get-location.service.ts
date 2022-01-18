import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetLocationService {

constructor() { }

findLatitudeAndLongitude(): Promise<any> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({lat: position.coords.latitude, long: position.coords.longitude});
      },
      (error) => {
        reject(error);
      }
    );
  });

}

}
