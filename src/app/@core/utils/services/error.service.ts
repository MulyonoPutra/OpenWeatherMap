import { Injectable } from '@angular/core';
import { AlertMessageService } from './alert-message.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private messageService: AlertMessageService) {}

  public getMessage(error: any): any {
    switch (error.status || error.code) {
      case 400: {
        return this.messageService.showInfo(error.error.message, 5000);
      }
      case 404: {
        return this.messageService.showError(error.error.message, 5000);
      }
      case 403: {
        return this.messageService.showError(error.error.message, 5000);
      }
      case 500: {
        return this.messageService.showError(error.error.message, 5000);
      }
      case 503: {
        return this.messageService.showError(error.error.message, 5000);
      }
      default: {
        return this.messageService.showError(error.error.message, 5000);
      }
    }
  }
}
