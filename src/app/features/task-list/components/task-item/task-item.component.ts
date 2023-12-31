import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task: Task;
}
