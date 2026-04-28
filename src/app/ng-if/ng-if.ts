import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf, FormsModule],
  templateUrl: './ng-if.html',
  styleUrl: './ng-if.css',
})
export class NgIfComponent {

  number1: string = "";
  number2: string = "";
  div1Visible: boolean = false;

  hideDiv1(){
    this.div1Visible = false;
  }

  showDiv1(){
    this.div1Visible = true;
  }
}
