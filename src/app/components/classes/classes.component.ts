import { Component } from '@angular/core';
import { ClassCardComponent } from '../class-card/class-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classes',
  imports: [CommonModule, ClassCardComponent],
  standalone: true,
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css',
})
export class ClassesComponent {
  classes = [
    {
      title: 'Recovery Energy',
      description: 'Descrição da aula Recovery Energy.',
      icon: 'assets/images/energy.svg',
    },
    {
      title: 'Body Building',
      description: 'Descrição da aula Body Building.',
      icon: 'assets/images/dumbbell-solid.svg',
    },
    {
      title: 'Yoga Fitness',
      description: 'Descrição da aula Yoga Fitness.',
      icon: 'assets/images/yoga.svg',
    },
    {
      title: 'Protein Plan',
      description: 'Descrição do plano de proteínas.',
      icon: 'assets/images/steak.svg',
    },
    {
      title: 'Kick Boxing',
      description: 'Descrição da aula de Kick Boxing.',
      icon: 'assets/images/fight.svg',
    },
    {
      title: 'Lose Weight',
      description: 'Descrição do programa perda de peso.',
      icon: 'assets/images/weight-loss.svg',
    },
  ];
}
