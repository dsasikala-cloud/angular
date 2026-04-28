import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.html',
  styleUrl: './ng-for.css',
})
export class NgForComponent {

  cityList: string[] = ["Chennai", "Bangalore", "Hyderabad", "Pune", "Mumbai"];

  empList: any[] = [
    {id: 101, name: "aaa", city: "chennai"},
    {id: 102, name: "bbb", city: "bangalore"},
    {id: 103, name: "ccc", city: "hyderabad"},
    {id: 104, name: "ddd", city: "pune"},
    {id: 105, name: "eee", city: "mumbai"}
  ]
}
