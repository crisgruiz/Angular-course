import { NgClass } from '@angular/common';
import { Component, signal, computed } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css',
  // imports: [NgClass],
})
export class DragonballComponent {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 9000,
    },
    {
      id: 3,
      name: 'Piccolo',
      power: 3000,
    },
  ]);

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // });
}
