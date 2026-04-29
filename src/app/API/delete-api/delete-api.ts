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
    this.http.get('https://69f19763c1533dbedc9e893e.mockapi.io/api/sk/users').subscribe((result: any) => {
      this.userList = result;
    });
  }

  saveUser() {
    debugger;
    this.http.post('https://69f19763c1533dbedc9e893e.mockapi.io/api/sk/users', this.userObj).subscribe((res: any) => {
      debugger;
      if(res){
        alert('user saved');
        this.getUsers();
      }
      else {
        alert(res.message);
      }
    });
  }

  onEdit(data: any) {
    this.userObj = {...data};
  }

  onDelete(id: any) {

    const isDelete = confirm("are you sure want to delete?");
    debugger;
    if(isDelete) {
      this.http.delete(`https://69f19763c1533dbedc9e893e.mockapi.io/api/sk/users/${id}`).subscribe((res: any) => {
      if(res){
        alert('user deleted');
        this.getUsers();
      }
      else {
        alert(res.message);
      }
    })
    }
  }

  updateUser() {
    this.http.put(`https://69f19763c1533dbedc9e893e.mockapi.io/api/sk/users/${this.userObj.id}`, this.userObj).subscribe((res: any) => {
      if(res){
        alert('user updated');
        this.getUsers();
      }
      else {
        alert(res.message);
      }
    });
  }

}
