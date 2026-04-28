import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css',
})
export class PostApi {
  carList: any[] = [];
  carObj: any = {
    carId: 0,
    bigintrand: "",
    model: "",
    year: "",
    color: "",
    dailyRate: "",
    carImage: "",
    regNo: "",
  };
  
  http = inject(HttpClient);

  getCars() {
    this.http.get('/api/CarRentalApp/GetCars').subscribe((result: any) => {
      this.carList = result.data;
    });
  }

  saveCar() {
    debugger;
    this.http.post('/api/CarRentalApp/CreateNewCar', this.carObj).subscribe((res: any) => {
      debugger;
      if(res.result){
        alert('car saved');
        this.getCars();
      }
      else {
        alert(res.message);
      }
    });
  }
}
