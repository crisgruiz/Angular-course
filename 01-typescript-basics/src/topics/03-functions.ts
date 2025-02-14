const addNumbers = (a: number, b:number)=>{
return a+b
}

const multiply = (fistNumber: number, secondNumber?:number, base:number = 2)=>{
return fistNumber*base
}

const result = addNumbers(1,2)
const multiplyResult= multiply(5)

interface Character {
    name: string;
    hp: number;
    showHp: ()=>void;
}

const Golum:Character = {
    name: 'Golum',
    hp: 50,
    showHp() {
        console.log(`puntos de vida ${this.hp}`);
    },
}

const healCharacter = (character: Character, amount:number)=>{
character.hp += amount;
}

Golum.showHp()

healCharacter(Golum, 40)

Golum.showHp()
export {}