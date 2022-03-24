"use strict";
// const character = 'luigi';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// console.log(inputs);
// inputs.forEach(input => {
//     console.log(input)
// })
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// explicit types
let characters;
let age;
let isLoggedIn;
// age = 'luigi';
age = 25;
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
let ninjas;
// ninjas = [10, 21];
ninjas = ['Tobi', 'sam'];
ninjas.push('smith');
console.log(ninjas);
// union
let mixed = [];
mixed.push('hello');
mixed.push(25);
// mixed.push(false);
console.log(mixed);
let uid;
uid = 123;
uid = "tboy";
// Objects
let ninjaOne;
ninjaOne = { name: 'Yushi', age: 20 };
let ninjaTwo;
ninjaTwo = { name: 'mario', age: 30, beltColor: "pink" };
// ANY
let num;
num = true;
console.log(num);
num = 'hello';
num = {
    name: 'luigi'
};
console.log(num);
let mix = [];
mix.push(5);
mix.push('mario');
mix.push(true);
console.log(mixed);
let ninj;
ninj = {
    name: 'yushi',
    age: 26
};
console.log(ninj);
// function
let greet = () => {
    console.log('hello');
};
greet();
// greet = 'hello'
const add = (a, b) => {
    console.log(a + b);
};
add(5, 10);
