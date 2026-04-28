import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Master } from '../service/master';

@Component({
  selector: 'app-admin',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

  result: number = 0

  masterSr = inject(Master);

  constructor() {
    debugger;
    this.result = this.masterSr.addTwoNum(22, 33);
  }
}
