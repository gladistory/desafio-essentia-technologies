import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'; // MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // MatInputModule
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-tasks',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  encapsulation: ViewEncapsulation.None, // Permite aplicar estilos globais
})
export class TasksComponent {
  showForm = false; // Controla a exibição do formulário

  toggleForm() {
    this.showForm = !this.showForm; // Alterna entre mostrar/ocultar
  }
}
