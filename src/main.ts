// const character = 'luigi';

// console.log(character);

// const inputs = document.querySelectorAll('input');

// console.log(inputs);

// inputs.forEach(input => {
//     console.log(input)
// })

const circ = (diameter:number) => {
    return diameter * Math.PI;
}

console.log(circ(7.5));

// explicit types
let characters: string;

let age: number;

let isLoggedIn: boolean;

// age = 'luigi';
age = 25;

// isLoggedIn = 25;
isLoggedIn = true;



// arrays

let ninjas: string[];

// ninjas = [10, 21];
ninjas = ['Tobi', 'sam'];

ninjas.push('smith')
console.log(ninjas);


// union

let mixed: (string | number)[] = [];
mixed.push('hello');
mixed.push(25);
// mixed.push(false);
console.log(mixed);


let uid: string | number;
uid = 123;
uid = "tboy";



// Objects

let ninjaOne: object;
ninjaOne = {name: 'Yushi', age: 20};

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {name: 'mario', age: 30, beltColor: "pink"};




// ANY

let num: any

num = true;
console.log(num);
num = 'hello'
num = {
    name: 'luigi'
};
console.log(num);

let mix: any[] = [];

mix.push(5);
mix.push('mario');
mix.push(true);
console.log(mixed);

let ninj: {
    name: any,
    age: any
};

ninj = {
    name: 'yushi',
    age: 26
}
console.log(ninj);



// function

let greet: Function = () => {
    console.log('hello')
}
greet();

// greet = 'hello'

const add = (a: number, b:number, c?: number | string):void => {
    console.log(a + b);
    console.log(c);
}

add(5, 10, '20');


const minus = ( a: number, b: number) => {
    return a - b;
};

let result = minus(10, 7);
// result = 'something'