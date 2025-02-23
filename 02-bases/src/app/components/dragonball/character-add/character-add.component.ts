import { Component, input, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: 1,
      name: this.name(),
      power: this.power(),
    };

    // this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }
  resetFields = () => {
    this.name.set('');
    this.power.set(0);
  };
}
