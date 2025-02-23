import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter-page.component';
import { HeroComponent } from './pages/hero/hero.component';
import { DragonballComponent } from './pages/dragonball/dragonball.component';
import { SuperDragonballComponent } from './pages/super-dragonball/super-dragonball.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'dragonball',
    component: DragonballComponent,
  },
  {
    path: 'super-dragonball',
    component: SuperDragonballComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
