import { Component } from '@angular/core';
import { TrainerCardComponent } from '../trainer-card/trainer-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-trainers',
  standalone: true,
  imports: [CommonModule, TrainerCardComponent],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css',
})
export class TrainersComponent {
  trainers = [
    {
      title: 'Sabrina Tozeli',
      description: 'Female Trainer',
      image: 'assets/images/trainer2.jpg',
    },
    {
      title: 'Jorge Simões',
      description: 'Male Trainer',
      image: 'assets/images/trainer1.jpg',
    },
    {
      title: 'Arhur Oliveira',
      description: 'Cheif Trainer',
      image: 'assets/images/trainer3.jpg',
    },
  ];
}
