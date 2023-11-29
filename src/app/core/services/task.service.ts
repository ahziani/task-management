import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mocks/mock-tasks';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[]= TASKS;

  getTasks() {
    return this.tasks;
  }

  getCompletedTask(): Task[] {
    return  this.tasks.filter(task => task.completed)
  }

  getInprogressTask(): Task[] {
    return this.tasks.filter(task => !task.completed)
  }

}
