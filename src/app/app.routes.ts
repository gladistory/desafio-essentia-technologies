import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';
export const routes: Routes = [
    {path: 'tasks', component: TasksComponent},
    {path: 'login', component: LoginComponent},
];