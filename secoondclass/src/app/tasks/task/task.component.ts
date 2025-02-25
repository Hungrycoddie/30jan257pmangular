import { Component, inject, Input } from '@angular/core';
import { type Task } from './task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.services';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  
  // @Output() complete = new EventEmitter<string>();



  private taskService = inject(TasksService)

  onCompleteTask() {
    this.taskService.removeTask(this.task.id)
  }
}
