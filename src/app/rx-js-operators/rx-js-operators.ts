import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { filter, from, interval, map, of, take } from 'rxjs';
import { Master } from '../service/master';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rx-js-operators',
  imports: [ReactiveFormsModule],
  templateUrl: './rx-js-operators.html',
  styleUrl: './rx-js-operators.css',
})
export class RxJsOperators {

  noList1$ = from([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  noList2$ = of([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  timeInterval = interval(2000);

  masterSrv = inject(Master);

  searchControl = new FormControl();

  constructor() {

    this.timeInterval.pipe(
      take(5)
    ).subscribe((res) => {
      console.log(res);
    })

    this.searchControl.valueChanges.pipe(
      filter((search => search.length >= 3))
    ).subscribe((res: any) => {
      console.log(res);
    })

    // this.timeInterval.pipe(
    //   filter(num => num % 2 == 0)
    // ).subscribe((res: any) => {
    //   console.log(res);
    // })

    this.masterSrv.loadUsers().subscribe((res: any) => {
      console.log(res);
    })

    this.masterSrv.getSingleUser().subscribe((res: any) => {
      console.log(res);
    })

    // this.noList1$.pipe(
    //   filter(x => x % 2 === 0)
    // ).subscribe((res) => {
    //   console.log(res);
    // })

    this.noList2$.pipe(
      map((result) => result.filter(num => num % 2 == 0))
    ).subscribe((res) => {
      console.log(res);
    })
  }

}
