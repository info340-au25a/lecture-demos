'use strict';

console.log("executing other.js");

const peopleArray = ["John", "Paul", "George", "Ringo"];

console.log(peopleArray[0]);

export const otherMsg = "Hello from other";

export default function otherFunc() {
  console.log("Other is best module");
}

