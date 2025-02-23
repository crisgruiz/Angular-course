import { NgClass } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { Character } from '../../interfaces/character.interface';

@Component({
  templateUrl: './super-dragonball.component.html',
  styleUrl: './super-dragonball.component.css',
  selector: 'super-dragonball',
  imports: [CharacterListComponent],
})
export class SuperDragonballComponent {
  name = signal('');
  power = signal(0);

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
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }
  resetFields = () => {
    this.name.set('');
    this.power.set(0);
  };
}
