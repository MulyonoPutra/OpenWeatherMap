import { GeoLocation, SharedService } from 'src/app/@core/utils/services/shared.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private router: Router, private sharedService: SharedService) {}

	navigate(route: string) {
		if (route === 'current') {
			this.router.navigate(['/current']);
      const geoLocation: GeoLocation = this.sharedService.getGeoLocation();
      if(!geoLocation) {
        Swal.fire('warning', 'Please allow location access in your computer!', 'warning');
      }
		} else if (route === 'forecast') {
			this.router.navigate(['/forecast']);
		}
	}
}
