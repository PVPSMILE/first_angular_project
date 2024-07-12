import { Component, Input, computed, signal } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';


// const randomIndex = Math.floor(Math.random() *DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input( ) avatar!: string;
  @Input( ) name!: string;

  // selectedUser = signal(DUMMY_USERS[randomIndex])

  // ImagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  get ImagePath() {
    return 'assets/users/' + this.avatar
  }
  onSelectUser (){
    
  }
}