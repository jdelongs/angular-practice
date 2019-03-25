import { AbstractControl, ValidationErrors } from '@angular/forms';


export class PasswordValidator {
  static validateOldPassword(control: AbstractControl): Promise<ValidationErrors> | null {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== '123') {
           resolve({ validateOldPassword: true});
         } else {
          resolve(null);
         }
       }, 2000);
    });
  }

  static passwordsShouldMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');

    if (newPassword.value !== confirmPassword.value)
        return { passwordsShouldMatch: true };

    return null;
  }
}
