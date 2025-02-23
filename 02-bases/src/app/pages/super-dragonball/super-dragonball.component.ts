import { DragonballService } from './../../services/dragonball.service';
import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';

@Component({
  templateUrl: './super-dragonball.component.html',
  styleUrl: './super-dragonball.component.css',
  selector: 'super-dragonball',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class SuperDragonballComponent {
  public dragonballService = inject(DragonballService);
}
