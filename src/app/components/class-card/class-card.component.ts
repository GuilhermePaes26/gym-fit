import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-class-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-card.component.html',
  styleUrl: './class-card.component.css',
})
export class ClassCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: any;
}
