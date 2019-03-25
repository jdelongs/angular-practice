import { PasswordValidator } from './password.validator';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['',
        Validators.required,
        PasswordValidator.validateOldPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidator.passwordsShouldMatch
    });
}
  // form setup
  // form = new FormGroup({
  //   oldPassword: new FormControl('', Validators.required, PasswordValidator.validateOldPassword),
  //   newPassword: new FormControl('', Validators.required),
  //   confirmPassword: new FormControl('', Validators.required)
  // });

  // getters for the form controls
  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
