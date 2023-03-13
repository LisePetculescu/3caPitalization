"use-strict";

const myName = "Lise";

const cap3 = myName.substring(2,3).toUpperCase();
console.log(cap3);

const smallBefore = myName.substring(0,2).toLowerCase();
console.log(smallBefore);

const smallAfter = myName.substring(3).toLowerCase();
console.log(smallAfter);

console.log(`${smallBefore}${cap3}${smallAfter}`);

const newName = `${smallBefore}${cap3}${smallAfter}`
console.log(newName);