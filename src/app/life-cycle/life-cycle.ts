import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle implements OnInit, AfterViewInit, AfterViewChecked,
AfterContentInit, AfterContentChecked, OnDestroy {

  constructor() {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    //api call function
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", performance.now());
    //viewchild, getting reference of element
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

}
