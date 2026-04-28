import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, NgIf],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {

  user: any = {
    firstName: "",
    lastName: "",
    userName: "",
    city: "",
    state: "",
    zip: "",
    isTermsAgreed: false
  }

  onSave() {
    debugger;
    const userForm = this.user;
  }
}
