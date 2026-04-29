import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../service/master';
import { ProgressBar } from '../reusable/progress-bar/progress-bar';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule, ProgressBar],
  templateUrl: './control-statement.html',
  styleUrl: './control-statement.css',
})
export class ControlStatement {
  isColor: boolean = true;
  isChecked: boolean = false;

  empList: any[] = [
    {id: 101, name: "aaa", city: "chennai"},
    {id: 102, name: "bbb", city: "bangalore"},
    {id: 103, name: "ccc", city: "hyderabad"},
    {id: 104, name: "ddd", city: "pune"},
    {id: 105, name: "eee", city: "mumbai"}
  ]

  cityList: string[] = [
    'nellore',
    'chennai',
    'bangalore',
    'hyderabad',
    'mumbai'
  ]

  constructor(private masterService: Master) {
    debugger;
    const result = this.masterService.addTwoNum(12, 15);
  }

  hideShow(isShow: boolean) {
    this.isColor = isShow;
  }
}
