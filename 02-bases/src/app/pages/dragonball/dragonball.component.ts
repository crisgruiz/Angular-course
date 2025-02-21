import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css',
})
export class DragonballComponent {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9000,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8000,
    },
    {
      id: 3,
      name: 'Piccolo',
      power: 3000,
    },
  ]);
}
