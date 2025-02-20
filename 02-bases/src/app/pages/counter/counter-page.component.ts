import { Component, signal } from '@angular/core';
// @Component() is a decorator that turns my class into a component
@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
  standalone: false,
  selector: 'app-counter',
})
export class CounterComponent {
  public counter: number = 10;
  counterSignal = signal(10);

  increaseBy = (value: number): void => {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update((current) => current + value);
  };

  resetCounter = (): void => {
    this.counter = 10;
    this.counterSignal.set(10);
  };
}
