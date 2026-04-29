import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer';
import { CommonModule } from '@angular/common';
import { Tabs } from "../../reusable/tabs/tabs";

@Component({
  selector: 'app-customer',
  imports: [FormsModule, CommonModule, Tabs],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer implements OnInit{

  userObj: any = {
    id: 0,
    name: '',
    company: '',
    username: '',
    email: '',
    phone: '',
  };

  userArray: any[] = [];

  userTabs: string[] = ["one", "two", "three"];

  constructor(private custSrv: CustomerService) {
    // this.getUserObj();
  }

  ngOnInit() {
    this.getUserObj();
  }

  getUserObj() {
    this.custSrv.loadUsers().subscribe((res: any) => {
      debugger;
      console.log("API RESPONSE => ", res);
      this.userArray = res;
      console.log("USER ARRAY => ", this.userArray);
    })
  }

  resetForm() {
    this.userObj = {
    id: 0,
    name: '',
    company: '',
    username: '',
    email: '',
    phone: '',
  };
  }

  saveUser() {
    this.custSrv.createUsers(this.userObj).subscribe((res: any) => {
      if(res && res.id) {
        alert("customer created");
        // this.customerObj.unshift(res);
        this.getUserObj();
      } else {
        alert(res.message);
      }
    })
  }
}
