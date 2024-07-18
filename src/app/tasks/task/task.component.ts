import { Component, Input, inject} from '@angular/core';
import { type Task } from './task.modal';

import { TasksService } from '../tasks.service'
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required:true }) task!: Task;
  private tasksService = inject(TasksService)

  onCompleteTask (){
    this.tasksService.removeTask(this.task.id)
  }

}
