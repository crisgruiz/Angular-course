import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter-page.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
];
