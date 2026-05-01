import { Component } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-rx-js-basics',
  imports: [],
  templateUrl: './rx-js-basics.html',
  styleUrl: './rx-js-basics.css',
})
export class RxJsBasics {

  //global observables
  cityList: string[] = ["nellore", "chennai", "bangalore"];

  cityList$ = of(["nellore", "chennai", "bangalore"]);

  cityList2$ = from(["nellore", "chennai", "bangalore"]);

  interval$ = interval(1000);

  timer$ = timer(5000);

  constructor() {

    this.cityList$.subscribe((cityData: string[]) => {
      debugger;
      console.log(cityData);
    })

    this.timer$.subscribe(timin => {
      console.log("timer executed "+timin);
    })

    this.interval$.subscribe((inter: number) => {
      console.log("interval time" +inter);
    })

    this.cityList2$.subscribe((city: string) => {
      debugger;
      console.log(city);
    })

    const myObs$ = new Observable(value => {
      debugger;
      value.next("this is angular")
    })

    myObs$.subscribe(message => {
      debugger;
      console.log(message);
    })
  }

}
