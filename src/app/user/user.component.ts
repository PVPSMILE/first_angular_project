import { Component, computed, Input, Output, output, EventEmitter } from '@angular/core';

import { type User } from './user.modal';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input () user!:User
  @Input ({ required:true }) selected!:boolean;
  @Output () select = new EventEmitter();
  
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  
}

  onSelectUser (){
    this.select.emit(this.user.id);
  }
}
