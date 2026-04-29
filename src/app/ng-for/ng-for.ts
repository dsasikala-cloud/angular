import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProgressBar } from '../reusable/progress-bar/progress-bar';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor, ProgressBar],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css',
})
export class NgForComponent {

  cityList: string[] = ["Chennai", "Bangalore", "Hyderabad", "Pune", "Mumbai"];

  empList: any[] = [
    {id: 101, name: "aaa", city: "chennai", attendance: 70},
    {id: 102, name: "bbb", city: "bangalore", attendance: 55},
    {id: 103, name: "ccc", city: "hyderabad", attendance: 80},
    {id: 104, name: "ddd", city: "pune", attendance: 95},
    {id: 105, name: "eee", city: "mumbai", attendance: 85}
  ]
}
