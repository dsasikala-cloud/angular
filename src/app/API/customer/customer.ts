import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer{

  customerObj: any = {
    id: 0,
    username: "",
    firstName: "",
    phone: "",
    email: ""
  };

  customerArray: any[] = [];

  constructor(private custSrv: CustomerService) {
    // this.getcustomerObj();
  }

  // getcustomerObj() {
  //   this.http.get('https://fake-json-api.mock.beeceptor.com/customers').subscribe((res: any) => {
  //     this.customerArray = res;
  //   });
  // }

  getcustomerObj() {
    this.custSrv.loadCustomers().subscribe((res: any) => {
      // debugger;
      this.customerArray = res.users;
    })
  }

  saveCustomer() {
    this.custSrv.createCustomer(this.customerObj).subscribe((res: any) => {
      if(res && res.id) {
        alert("customer created");
        // this.customerObj.unshift(res);
        this.getcustomerObj();
      } else {
        alert(res.message);
      }
    })
  }
}
