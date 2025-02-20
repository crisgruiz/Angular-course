import { Component } from '@angular/core';
// @Component() is a decorator that turns my class into a component
@Component({
  selector: 'app-counter',
  template: `<p>Counter: {{ counter }}</p>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resentCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>`,
  standalone: false,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy = (value: number): void => {
    this.counter += value;
  };

  resentCounter = (): void => {
    this.counter = 10;
  };
}
