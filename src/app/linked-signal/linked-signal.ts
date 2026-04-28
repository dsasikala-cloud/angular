import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.html',
  styleUrl: './linked-signal.css',
})
export class LinkedSignal {

  firstName = signal<string>("sasi");
  lastName = signal<string>("kala");

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newOptions, previous) => {
      const fullName = newOptions + " " + this.lastName();
      return fullName;
    }
  })

  user = signal({id: 111, name:"sasi"});

  email = linkedSignal({
    source: this.user,
    computation: user => `${user.name + user.id}@gmail.com`,
    equal: (a: any, b: any) => a.id == b.id
  })

  onNameChange() {
    this.firstName.set("sai");
  }

  onEmailChange() {
    this.user.set({id: 222, name: "sasi"});
  }
}
