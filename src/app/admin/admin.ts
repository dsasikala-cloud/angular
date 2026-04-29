import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Master } from '../service/master';
import { ProgressBar } from '../reusable/progress-bar/progress-bar';

@Component({
  selector: 'app-admin',
  imports: [RouterLink, ProgressBar],
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
