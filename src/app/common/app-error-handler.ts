import { ErrorHandler } from '@angular/core';


export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('An unexpected Error has occurred');
    console.log(error);
  }
}
