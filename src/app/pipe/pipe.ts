import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from './na-pipe';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, NaPipe, NgFor],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css',
})
export class PipeComponent {

  course:string = 'Angular';

  currentDate: Date = new Date();

  studentObj: any = {
    name: 'aaa',
    city: 'nellore',
    mobile: '1112223335'
  }

  cityList: string[] = ['Chennai', 'Bangalore', 'Hyderabad', 'Pune', 'Mumbai'];

  empList: any[] = [
    { id: 101, name: '', city: 'chennai' },
    { id: 102, name: 'bbb', city: 'bangalore' },
    { id: 103, name: null, city: 'hyderabad' },
    { id: 104, name: 'ddd', city: 'pune' },
    { id: 105, name: undefined, city: 'mumbai' },
  ];
}
