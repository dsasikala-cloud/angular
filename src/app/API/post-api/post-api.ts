import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tabs } from "../../reusable/tabs/tabs";

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, Tabs],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css',
})
export class PostApi {
  userList: any[] = [];
  userObj: any = {
    name: "",
    company: "",
    username: "",
    email: "",
    phone: ""
  };

  userTabs: string[] = ["userList", "userForm"]
  currentTab: string = "";
  
  http = inject(HttpClient);

  onTabChange(tabName: string) {
    debugger;
    this.currentTab = tabName;
  }

  getUsers() {
    debugger;
    this.http.get("https://69f19763c1533dbedc9e893e.mockapi.io/api/sk/users").subscribe((result: any) => {
      debugger;
      this.userList = result;
    });
  }

  saveUser() {
    debugger;
    this.http.post("https://69f19763c1533dbedc9e893e.mockapi.io/api/sk/users", this.userObj).subscribe((res: any) => {
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
}



// https://json-placeholder.mock.beeceptor.com/users
// https://jsonplaceholder.typicode.com/posts
