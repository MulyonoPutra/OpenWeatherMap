import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
	constructor(private router: Router) {}

	navigate(route: string) {
		if (route === 'current') {
			this.router.navigate(['/current']);
			Swal.fire('warning', 'Please allow location access in your computer!', 'warning');
		} else if (route === 'forecast') {
			this.router.navigate(['/forecast']);
		}
	}
}
