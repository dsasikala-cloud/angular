import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  firstName: string = "";
  id: number = 101;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = "enter your name";
  div1ClassName: string = "bg-primary";
  selectedTech: string = "";
  
  constructor(private router: Router){
    console.log("Hello");
  }

  onClick(){
    alert("Button clicked!!");
  }

  onChange(value: string){
    alert("tech changed to " + value + "!!");
  }

  navigateToAdmin() {
    this.router.navigateByUrl('/admin');
  }
}
