import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesCardComponent } from '../prices-card/prices-card.component';
@Component({
  selector: 'app-plan',
  imports: [CommonModule, PricesCardComponent],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css',
})
export class PlanComponent {
  plans = [
    {
      title: 'Silver Plan',
      description: 'Lorem ipsum dolor',
      price: 10,
      features: [
        'Free Tutorials',
        'Aerobic Programmes',
        'Trainer Support',
        'Open Gym',
        'Gymnastics',
      ],
    },
    {
      title: 'Gold Plan',
      description: 'Lorem ipsum dolor',
      price: 20,
      features: [
        'Free Tutorials',
        'Aerobic Programmes',
        'Trainer Supports',
        'Fitness Orientation',
        'Gymnastics',
      ],
    },
    {
      title: 'Diamond Plan',
      description: 'Lorem ipsum dolor',
      price: 30,
      features: [
        'Free Tutorials',
        'Aerobic Programmes',
        'Trainer Supports',
        'Fitness Orientation',
        'Morning & Evening Batches',
      ],
    },
  ];
}
