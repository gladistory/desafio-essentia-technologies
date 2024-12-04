import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Necessário para animações do Angular Material
import { MatFormFieldModule } from '@angular/material/form-field'; // MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // MatInputModule

@Component({
  selector: 'app-tasks',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  showForm = false; // Controla a exibição do formulário

  toggleForm() {
    this.showForm = !this.showForm; // Alterna entre mostrar/ocultar
  }
}
