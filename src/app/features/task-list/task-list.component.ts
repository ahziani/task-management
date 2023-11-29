import { Component } from '@angular/core';
import { Task } from 'src/app/core/models/task';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  listCompletedTask: Task[];
  listInprogressTask: Task[];

  constructor(private tasks: TaskService) {
    this.listCompletedTask = this.tasks.getCompletedTask();
    this.listInprogressTask = this.tasks.getInprogressTask();
  }
}
