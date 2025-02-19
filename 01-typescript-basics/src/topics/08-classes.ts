export class Person {
  constructor(public name: string, private address: string = "No address") {}
}

export class Hero {
  // public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    // this.person = new Person(realName);
  }
}

const Tony = new Person("Tony", "New York");
const ironman = new Hero("Ironman", 45, "Tony", Tony);

console.log(ironman);
