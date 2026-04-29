import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  constructor(private http: HttpClient) {

  }

  loadUsers() {
    return this.http.get('https://69f19763c1533dbedc9e893e.mockapi.io/api/sk/users');
  }

  createUsers(obj: any) {
    return this.http.post('https://69f19763c1533dbedc9e893e.mockapi.io/api/sk/users', obj);
  }

}
