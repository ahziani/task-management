import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateFromTodayValidator } from 'src/app/shared/validators/date-validators';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', Validators.required],
      log: [0],
      deadline: ['', [Validators.required, dateFromTodayValidator()]], 
      priority: [''], 
      complated: [false], 
    });
  }

  onSubmit() {
    console.log('deadline', this.taskForm.get('deadline')?.errors)
  }

}
