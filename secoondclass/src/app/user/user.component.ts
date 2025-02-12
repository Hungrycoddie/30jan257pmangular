import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { log } from 'node:console';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];
  name= "";



  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onUserSelected() {
    // this.selectedUser.name = this.name;


    this.name = this.selectedUser.name;

    
    // console.log(this.selectedUser.name)
  }




}
