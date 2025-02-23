import { NgClass } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';

@Component({
  templateUrl: './super-dragonball.component.html',
  styleUrl: './super-dragonball.component.css',
  selector: 'super-dragonball',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class SuperDragonballComponent {
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

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }
}
