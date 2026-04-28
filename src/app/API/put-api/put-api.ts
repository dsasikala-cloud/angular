import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-api',
  imports: [FormsModule],
  templateUrl: './put-api.html',
  styleUrl: './put-api.css',
})
export class PutApi {

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

  onEdit(data: any) {
    this.carObj = data;
  }

  updateCar() {
    this.http.put('/api/CarRentalApp/UpdateCar', this.carObj).subscribe((res: any) => {
      if(res.result){
        alert('car updated');
        this.getCars();
      }
      else {
        alert(res.message);
      }
    });
  }

}
