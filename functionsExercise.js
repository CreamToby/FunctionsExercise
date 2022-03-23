// Functions Exercise
// 1
function fozzieBear() {
    console.log(`Wocka Wocka!`);
}
fozzieBear();

console.log(`==================`);

// 2
function beaker(speak){
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
}
beaker(`Me`)
beaker(`Mee`);
beaker(`Meep`);

console.log(`==================`);

// 3
function muppetShow(a, b){
    if(a === `Muppet` && b === `Show`){
        console.log(`It's time to play the music. It's time to light the lights.`);
    }
}

muppetShow(`Muppet`,`Show`);

console.log(`==================`);

// 4
function kermit(){
    return `Kermit The Frog`;    
}

let frog = kermit();
console.log(frog);

console.log(`==================`);

// 5
function muppetShowSeason(seasons){
    if(seasons === 5){
        return `true`;
    }
    return `false`;
}

const tr = muppetShowSeason(5);
console.log(tr);
const fa = muppetShowSeason(4);
console.log(fa);

console.log(`==================`);

// 6
function question(){
    const manOrMuppet = `Am I a man or am I a Muppet?`;
    console.log(manOrMuppet);
}
question();

console.log(`==================`);

// 7
rainbowConnection = () => console.log(`Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`);
rainbowConnection();

console.log(`==================`);

// 8
// no

// 9
// yes

// BONUS
// 10a
const newMuppetMovies = [
    `The Muppets`,
    `Muppets Most Wanted`
];

// 10b
newMovies = n => `${n.toUpperCase()}`;

const upperMovies = newMuppetMovies.map(newMovies);
console.log(upperMovies);

console.log(`==================`);

// 11a
const oldMuppetMovies = [
    `The Muppet Movie`,
    `The Muppets Take Manhattan`,
    `The Great Muppet Caper`,
    `The Muppet Christmas Carol`,
    `Muppet Treasure Island`,
    `Muppets From Space`
];

// 11b
// console.log(`The Great Muppet Caper`.length);  //22
// console.log(`Muppet Treasure Island`.length);  //22

const twoMovies = oldMuppetMovies.filter(two => two.length === 22);
console.log(twoMovies);

console.log(`==================`);

// 12a
const charactersOne = [
    `Statler`,
    `Waldorf`
];

// 12b
const charactersTwo = [
    `The Swedish Chef`,
    `Animal`,
    `Rowlf`
];

// 12c
randomMuppet =  (characters) => {
    console.log(`${characters[Math.floor(Math.random() * characters.length)]}`);
}

// 12d
randomMuppet(charactersOne);

console.log(`==================`);

randomMuppet(charactersTwo);

console.log(`==================`);

// 13

caps = (string) => {
    return string.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
}

console.log(caps(`Hello World`));
// https://stackoverflow.com/questions/43204902/turn-every-second-character-to-uppercase-using-map



caps = (string) => {
    for (i=0; i < string.length; i+=2) {
       string = string.substr(0, i) + string[i].toUpperCase() + string.substr(i + 1);
    }
    return string;  
}

console.log(caps(`Hello World`));
// https://stackoverflow.com/questions/43192205/making-every-other-letter-capitalized

// extra bonus
// ...

