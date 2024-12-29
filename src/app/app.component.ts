import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { NgToastModule } from 'ng-angular-popup';
import { NgToastService, ToastType } from 'ng-angular-popup';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NgToastModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Easy-Task';

  constructor(private toast: NgToastService) {}

  showSuccess() {
    this.toast.success('Success Message', 'Title', 3000);
  }

  showError() {
    this.toast.danger('Error Message', 'Error', 3000);
  }

  showInfo() {
    this.toast.info('Info Message', 'Information', 3000);
  }

  showWarning() {
    this.toast.warning('Warning Message', 'Warning', 3000);
  }

}