interface AudioPlay{
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details{
    author: string,
    year: number
}

const audioPlayer: AudioPlay = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Beyonce",
        year: 2017
    }
}

const { song, details } = audioPlayer;
const { author } = details;

console.log('Song:', song);
console.log('Author:', author);


const [, , trunks]: string[] = ['Goku', 'Vegeta', 'Trunks']


console.log('Personaje 3', trunks);


export {}