import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle, FormsModule],
  templateUrl: './ng-style.html',
  styleUrl: './ng-style.css',
})
export class NgStyleComponent {
  div1Color: string = '';
  isChecked: boolean = false
  myCss: any = {
    'backgroundColor': 'violet',
    'color': 'white',
    'height': '100px'
  }
  

  addDiv1Color(className: string) {
    this.div1Color = className;
  }
}
