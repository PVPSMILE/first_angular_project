import { Component, computed, Input, Output, output, EventEmitter } from '@angular/core';

import { type User } from './user.modal';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input () user!:User
  @Output () select = new EventEmitter();
  
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  
}

  onSelectUser (){
    this.select.emit(this.user.id);
  }
}
