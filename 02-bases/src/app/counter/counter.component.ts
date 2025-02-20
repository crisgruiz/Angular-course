import { Component } from '@angular/core';
// @Component() is a decorator that turns my class into a component
@Component({
  selector: 'app-counter',
  template: '<h1>Hola Counter</h1>',
  standalone: false,
})
export class CounterComponent {}
