import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Master {

  constructor(private http: HttpClient) {}

  addTwoNum(num1: number, num2: number) {
    debugger;
    return num1 + num2;
  }

  loadUsers() {
    tap(userlist => {
      debugger;
    })
    return this.http.get("https://json-placeholder.mock.beeceptor.com/users").pipe(
      map((userList: any) => userList.map((user: any) => {
        return {id: user.id, name: user.name};
      }))
    ) 
  }

  getSingleUser() {
    return this.http.get("https://json-placeholder.mock.beeceptor.com/users/3").pipe(
      map((userList: any) => userList.address)
    )
  }
}
