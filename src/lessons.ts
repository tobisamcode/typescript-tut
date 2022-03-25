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






// Type Aliases


type StringOrNUm = string | number;
type objName = {
    name: string, 
    uid: string | number };


const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const grt = (user: objName) => {
    console.log(`${user.name} says hello`);
}

const grtAgain = (user: objName) => {
    console.log(`${user.name} says hello`);
}





// Function Signature

// example 1
let greetings: (a: string, b: string) => void;

greetings = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}


// example 3
let logDetail: (obj:
    {
        name: string,
        age: number
    }) => void;

logDetail = ( ninja:
    {
        name: string,
        age: number
    }) => {
        console.log(`${ninja.name} is ${ninja.age} years old`);
}

logDetail ({name: 'Tunde', age: 33})






// Interfaces

interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'shaun',
    age: 29,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('i spent', amount);
        return amount;
    }
};

// with a function
const greetPerson = (person: IsPerson) => {
    console.log('how are you doing',person.name, '?');
}

greetPerson(me);
