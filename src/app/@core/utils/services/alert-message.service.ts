import { Injectable } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar, MatLegacySnackBarConfig as MatSnackBarConfig } from '@angular/material/legacy-snack-bar';

@Injectable({
	providedIn: 'root',
})
export class AlertMessageService {
	constructor(private messageService: MatSnackBar) {}

	public showWarn(message: string, duration: number) {
		this.showMessage(message, duration, 'background-yellow');
	}

	public showSuccess(message: string, duration: number) {
		this.showMessage(message, duration, 'background-green');
	}

	public showInfo(message: string, duration: number) {
		this.showMessage(message, duration, 'background-purple');
	}

	public showError(message: string, duration: number) {
		this.showMessage(message, duration, 'background-red');
	}

	private showMessage(message: string, duration: number, styleClass: string) {
		const config = new MatSnackBarConfig();
		config.panelClass = ['snackbar-global', `${styleClass}`];
		config.duration = duration;
		config.horizontalPosition = 'right';
		this.messageService.open(message, undefined, config);
	}
}
