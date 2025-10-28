'use strict';

import { otherMsg } from './other.js';

import {otherFunc} from './other.js';

//import default
import otherFunc from './other.js';


console.log("executing main.js")

//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);

console.log(otherMsg);

otherFunc();

// const foo = (param) => {
//   return 'hello world';
// }

// console.log(foo("hello"));


// const myArray = [1, 2, 3];
// const [x, y, z, a] = myArray;

// const myObject = {a: 1, b: 2, c: 3, d: 4};
// const {b, a, c, e} = myObject;

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(e);

// const personObj = {name: 'Joel', job: "Prof"}
// const {name, prof} = personObj;


// function bar({a, b}, {c, d}) {
//   console.log(a, b, c, d);
// }

// bar({a:1, b:2,}, {c: 3, d:4});







// function getFullName({first, last}) {
//   return first + " " + last;
// }

// getFullName("joel", "ross");

