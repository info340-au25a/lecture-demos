'use strict';

// console.log("Hello world");
// console.log("It's brisk outside");
// console.log("good morning!");

const x = "hello";
// x = "goodbye";
// console.log(x);

// const tenNum = 10;
// const tenStr = '10';

// const areTheSame = ('' == 0);
// console.log(areTheSame);

// const lettersArray = ['a', 'b', 'c'];
// console.log(lettersArray);

// console.log(lettersArray[4]);

// lettersArray[0] = 'A';
// console.log(lettersArray);
// lettersArray[5] = 'f';
// console.log(lettersArray);

// const bigEmptyArray = Array(10);
// console.log(bigEmptyArray)


// const agesObj = {
//   sarah:42, 
//   amit:35, 
//   zhang:13
// }
const agesObj = {alice:40, bob:35, charles:13};

console.log(agesObj);

console.log( agesObj['fred'] );

agesObj['fred'] = 19;
console.log( agesObj );

const dailySleep = {day: "Wednesday", hoursSleep: 8};



// const numWords = {1:'one', 2:'two', 3:'three'}
// const numWordsKeys = Object.keys(numWords);
// console.log(numWordsKeys);

const peopleArray = [
    {name: 'Ada', height: 64, weight: 135},
    {name: 'Bob', height: 74, weight: 156},
    {name: 'Chris', height: 69, weight: 139},
    {name: 'Diya', height: 69, weight: 144},
    {name: 'Emma', height: 71, weight: 152}
];

console.log(peopleArray);

//Java: for(int x=0; x<array.length; x++)
//Python: for i in range(array.lenggth):

// for(let i=0; i<peopleArray.length; i++){
//   const personObj = peopleArray[i];
//   console.log(personObj.name);
// }

//Java: for(String s : stringArray)
for(const personObj of peopleArray){
  console.log(personObj.name);
}


function greet(greeting, name){
    return greeting  + ", " + name;
}


