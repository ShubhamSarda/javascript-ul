let numOne = 15;
let numTwo = numOne;
numOne = 30;

console.log(numOne);
console.log(numTwo);

let objOne = {title: "Learning JavaScript", rank: 2};
let objTwo = objOne;
let objThree = objTwo;
objOne.rank = 1;

console.log(objOne);
console.log(objTwo);

objTwo.rank = 5;
console.log(objOne);
console.log(objTwo);
console.log(objThree);