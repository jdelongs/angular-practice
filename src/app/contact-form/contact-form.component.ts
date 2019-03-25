import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  contactMethods = [
    { id: 1, name: 'email'},
    { id: 2, name: 'phone'}
  ];

  log(x) {
    console.log(x);
  }

  submit(f){
    console.log(f);
  }

}
