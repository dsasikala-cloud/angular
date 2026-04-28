import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-api',
  imports: [FormsModule],
  templateUrl: './delete-api.html',
  styleUrl: './delete-api.css',
})
export class DeleteApi {

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

  onDelete(id: any) {

    const isDelete = confirm("are you sure want to delete?");
    debugger;
    if(isDelete) {
      this.http.delete('/api/CarRentalApp/DeleteCarbyCarId?carId=' + id).subscribe((res: any) => {
      if(res.result){
        alert('car deleted');
        this.getCars();
      }
      else {
        alert(res.message);
      }
    })
    }
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
