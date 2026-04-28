import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  imports: [FormsModule],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi {

  userList: any[] = [];

  constructor(private http: HttpClient) {
    
  }

  getUsers() {
    this.http.get("https://json-placeholder.mock.beeceptor.com/users").subscribe((result: any) => {
      this.userList = result;
    })
  }

}
