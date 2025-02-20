import { Component } from '@angular/core';
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
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy = (value: number): void => {
    this.counter += value;
  };

  resetCounter = (): void => {
    this.counter = 10;
  };
}
