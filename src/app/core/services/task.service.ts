import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mocks/mock-tasks';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task: Task[]= TASKS;

  getTasks() {
    return this.task;
  }
}
