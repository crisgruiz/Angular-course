const skills: string[] = [
    'bash', 'counter', 'healing'
]

interface Character {
    name: string; 
    hp: number | 'full';
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: "Strider",
    hp: 100,
    skills: ['bash', 'counter'],
}

strider.hometown = "Riverdell"

console.table(strider)

export {}