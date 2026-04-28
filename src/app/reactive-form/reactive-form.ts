import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

  userForm: FormGroup = new FormGroup({
    fname: new FormControl("", [Validators.required]),
    lname: new FormControl("", [Validators.required, Validators.minLength(4)]),
    username: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl("Goa"),
    zip: new FormControl(),
    isAgree: new FormControl(false),
  })

  onUserSave() {
    const isValid = this.userForm.valid;
    const formValue = this.userForm.value;
    debugger;
  }

  constructor() {
    this.userForm.controls['state'].disable();
    
    setTimeout(() => {
      this.userForm.controls['state'].enable();
    }, 5000);
  }

}
