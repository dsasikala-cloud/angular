import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Signal {
  firstName = signal("sasi");
  lastName = signal<string>("kala");

  courseName: string = "Angular";
  rollNo = signal<number>(0);

  constructor() {
    const value = this.firstName();
    setTimeout(() => {
      debugger;
      this.firstName.set("sai");
      debugger;
    }, 5000)
  }

  onIncrement() {
    this.rollNo.update(value => value + 1);
  }
}
