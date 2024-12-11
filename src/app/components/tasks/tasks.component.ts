import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-tasks',
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  encapsulation: ViewEncapsulation.None, 
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TasksComponent {
  showForm = false; // Controla a exibição do formulário

  toggleForm() {
    this.showForm = !this.showForm; // Alterna entre mostrar/ocultar
  }
}
