import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trainer-card',
  imports: [CommonModule],
  templateUrl: './trainer-card.component.html',
  styleUrl: './trainer-card.component.css',
})
export class TrainerCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: any;
}
