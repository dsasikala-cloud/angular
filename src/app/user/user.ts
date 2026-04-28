import { Component } from '@angular/core';

import DUMMY_USERS from '../../assets/fruits.json';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];

  get imagePath() {
    return this.selectedUser.image;
  }

  onSelect() {
    // alert(`you selected ${this.selectedUser.name}`);
      this.selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
  }
}
