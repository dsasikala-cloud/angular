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
  userList: any[] = [];
  userObj: any = {
    id: 0,
    name: '',
    company: '',
    username: '',
    email: '',
    phone: '',
  };
  http = inject(HttpClient);

  getUsers() {
    this.http
      .get('https://69f19763c1533dbedc9e893e.mockapi.io/api/sk/users')
      .subscribe((result: any) => {
        this.userList = result;
      });
  }

  saveUser() {
    debugger;
    this.http
      .post('https://69f19763c1533dbedc9e893e.mockapi.io/api/sk/users', this.userObj)
      .subscribe((res: any) => {
        debugger;
        if (res.result) {
          alert('user saved');
          this.getUsers();
        } else {
          alert(res.message);
        }
      });
  }

  onEdit(data: any) {
    this.userObj = { ...data };
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

  updateUser() {
    debugger;
    this.http
      .put(`https://69f19763c1533dbedc9e893e.mockapi.io/api/sk/users/${this.userObj.id}`, this.userObj)
      .subscribe((res: any) => {
        debugger;
        if (res) {
          alert('User updated');
          this.getUsers();
          this.resetForm();
        } else {
          alert(res.message);
        }
      });
  }
}
