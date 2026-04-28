import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass, FormsModule],
  templateUrl: './ng-class.html',
  styleUrl: './ng-class.css',
})
export class NgClassComponent {

  div1BgColor: string = "bg-success";
  isChecked: boolean = false;
  div3Class: string = "";

  addDiv1Color(className: string) {
    this.div1BgColor = className;
  }
}
