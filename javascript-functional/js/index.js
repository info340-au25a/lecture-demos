'use strict';


const myArray = [
  'a',
  'b',
  'c',
]

// const myFunction = function(name) { 
//    console.log("Hello, "+name);
// }

// myFunction('class');

// const msg = "hello";

function sayHello(name) { 
   console.log("Hello, "+name);
}

// const myVariable = "hello"
// print("hello")

// const sayGoodbye = function(name) {
//    console.log("Later, "+name);
// }

// function callWithWorld(aFunction) {
//    aFunction("world");
// }

// callWithWorld(function(name) {
//    console.log("Later, "+name);
// });

// function getHello() {
//     return "Hello";
// }

// const result = sayHello();
// console.log( result );

// function doTogether(firstCallback, secondCallback){
//     console.log("first argument:", firstCallback);
//     firstCallback();  //execute the first function
//     secondCallback();  //execute the second function
//     console.log('at the "same time"!');
// }

// function patHead() {
//     console.log('pat your head');
// }

// function rubBelly() {
//     console.log('rub your belly');
// }

// //pass in the callbacks to do them together
// doTogether(patHead, rubBelly);

//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);

// for(const person of peopleArray) {
//   console.log(person.name);
// }

// const printName = function(personObj) {
//   console.log(personObj.name+"!!!");
// }

peopleArray.forEach(function(personObj) {
  console.log(personObj.name+"!!!");
});

//transformation
//give me a {}, I will give you a ""
// function capitalizePerson(personObj) {
//   return personObj.name.toUpperCase();
// }

const capitalizePerson = function(personObj) {
  return personObj.name.toUpperCase();
}


const loudNames = peopleArray.map(function(personObj) {
  return "<li>"+ personObj.name.toUpperCase() + "</li>";
});
console.log(loudNames);

//TEMPLATE
// const newArray = oldArray.map(function(element){
//   const transformed = element //...
//   return transformed;
// })

// const peopleGreetings = peopleNames.map(function(personName){
//   const transformed = "Hi "+personName+"!!";
//   return transformed;
// })

const tallPeople = peopleArray.filter(function(personObj){
  return personObj.height > 70;
})
console.log(tallPeople);

const nameString = peopleArray.reduce(function(accumulation, newPerson) {
  const longerString  = accumulation + " and " + newPerson.name;
  return longerString;
}, "")
console.log(nameString);