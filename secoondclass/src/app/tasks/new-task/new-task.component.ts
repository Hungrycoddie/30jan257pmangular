import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { type NewTaskData} from '../task/task.model'
import { TasksService } from '../tasks.services';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({required:true}) userId !: string;
  @Output() close = new EventEmitter<void>();

  enteredTittle = '';
  enteredSummary = '';
  enteredDate = '';

  private  taskService = inject(TasksService)

  
  onCancel() {
    this.close.emit();
  }



  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTittle,
      summary: this.enteredSummary,
      date: this.enteredDate, 
    },this.userId 
      
    )
    this.close.emit()

  }
}
