import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { TaskFormComponent } from './features/task-list/components/task-form/task-form.component';
import { LayoutComponent } from './layout/layout.component';
import { TaskListComponent } from './features/task-list/task-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '', 
    component: LayoutComponent,
    children: [
      { path: 'list', component: TaskListComponent },
      { path: 'add', component: TaskFormComponent },
      { path: 'edit/:id', component: TaskFormComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
