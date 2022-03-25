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
// or
/*
function beaker(speak){
    console.log(speak.repeat(4));
}
*/

// beaker(`Me`);
// beaker(`Mee`);
beaker(`Meep`);

console.log(`==================`);

// 3
function muppetShow(a, b){
    if(a === `Muppet` && b === `Show`){
        console.log(`It's time to play the music. It's time to light the lights.`);
    }
}

muppetShow(`Muppet`,`Show`);

// or
/*
function muppetShow(a, b){
    if(a === `Muppet` && b === `Show`){
        return `It's time to play the music. It's time to light the lights.`;
    }return '';
}

onsole.log(muppetShow(`Muppet`,`Show`));
*/

console.log(`==================`);

// 4
function kermit(){
    return `Kermit The Frog`;    
}

let frog = kermit();
console.log(frog);

// or
/*
function kermit(){
    console.log(`Kermit The Frog`);
}
kermit();
*/

// or
/*
function kermit(quote = `Kermit The Frog`){
    console.log(quote);
}
kermit();
*/

console.log(`==================`);

// 5
/*
function muppetShowSeasons(seasons){
    if(seasons === 5){
        return `true`;
    }
    return `false`;
}
true/false don't need string.
*/

function muppetShowSeasons(seasons){
    if(seasons === 5){
        return true;
    }
    return false;
}

/*
const tr = muppetShowSeasons(5);
console.log(tr);
const fa = muppetShowSeasons(4);
console.log(fa);
*/
console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(3));

console.log(`==================`);

// 6
/*
function question(){
    const manOrMuppet = `Am I a man or am I a Muppet?`;
    console.log(manOrMuppet);
}
question();
*/

const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet();


console.log(`==================`);

// 7
/*
rainbowConnection = () => console.log(`Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`);
rainbowConnection();
*/

// or
rainbowConnection = () => `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`;
console.log(rainbowConnection());



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
/*
newMovies = n => `${n.toUpperCase()}`;

const upperMovies = newMuppetMovies.map(newMovies);
console.log(upperMovies);
*/

/*
const uppers = newMuppetMovies.map(function(x){
    return x.toUpperCase();
});
console.log(uppers);
*/

// or
const upperMovies = newMuppetMovies.map(movie => movie.toUpperCase());
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
// random array string js
// https://www.codegrepper.com/code-examples/javascript/javascript+pick+random+string+from+array%5D

// or
/*
randomMuppet = characters => {
    characters[Math.floor(Math.random() * characters.length)];
    console.log(characters);
}
randomMuppet(charactersOne[Math.floor(Math.random() * characters.length)]);
*/

// 12d
randomMuppet(charactersOne);

console.log(`==================`);

randomMuppet(charactersTwo);

console.log(`==================`);

// 13
/*
caps = (string) => {
    return string.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
}
console.log(caps(`Hello World`));
*/
// https://stackoverflow.com/questions/43204902/turn-every-second-character-to-uppercase-using-map

/*
caps = (string) => {
    for (i=0; i < string.length; i+=2) {
       string = string.substr(0, i) + string[i].toUpperCase() + string.substr(i + 1);
    }
    return string;  
}

console.log(caps(`Hello World`));
*/
// https://stackoverflow.com/questions/43192205/making-every-other-letter-capitalized

/*
caps = string => {
    let chars = string.toLowerCase().split('');
    for(i = 0; i < chars.length; i+=2){
        chars[i] = chars[i].toUpperCase();
    }
    console.log(chars.join(''));
}

caps(`Hello World`);
*/

// or 

caps = (string) => {
    let newString = ``;
    for (i = 0; i < string.length; i++){
        if (i % 2 === 0) {
            newString += string[i].toUpperCase();
        } else {
            newString += string[i].toLowerCase();
        }
    }
    return newString;
}

console.log(caps(`Hello World`));

// extra bonus
// ...

caps = string => {
    let count = 0;
    let newString = ``;
    for (i = 0; i < string.length; i++){
        if (string[i] === ` `){
            newString += ` `;
        }else if (count % 2 === 0){
            newString += string[i].toUpperCase();
            count++;
        }else {
            newString += string[i].toLowerCase();
            count++;
        }
    }
    return newString;
}

console.log(caps(`Hello World`));
