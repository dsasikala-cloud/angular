import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  constructor(private http: HttpClient) {

  }

  loadCustomers() {
    return this.http.get('https://dummyjson.com/users');
  }

  createCustomer(obj: any) {
    return this.http.post('https://dummyjson.com/users/add', obj);
  }

}
