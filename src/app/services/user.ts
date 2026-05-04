import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {

  courseDuration$ = new BehaviorSubject<string>("2 months");

  roleBehavior$ = new BehaviorSubject<string>("");

  roleSub$ = new Subject<string>();

  private userDetails = new Map<number, Observable<any>>();

  constructor(private http: HttpClient) {}

  getDetails(id: number) {
    return this.http.get(`https://69f19763c1533dbedc9e893e.mockapi.io/api/sk/users/${id}`);
  }

}
