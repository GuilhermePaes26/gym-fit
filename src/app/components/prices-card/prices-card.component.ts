import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prices-card',
  imports: [CommonModule],
  templateUrl: './prices-card.component.html',
  styleUrl: './prices-card.component.css',
})
export class PricesCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() features: string[] = [];
}
