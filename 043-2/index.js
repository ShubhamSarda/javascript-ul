let objOne = {title: "Learning JavaScript", rank: 2};
let objTwo = {...objOne, publish: "22-02-2025", rank: 50};
objOne.rank = 1;

console.log(objOne);
console.log(objTwo);


let arrOne = ["shubham", "alex"];
let arrTemp = ["john", "deepak", "ABC"];
let arrTwo = [...arrOne, ...arrTemp, "XYZ"];
arrOne.push("deepak");

console.log(arrOne);
console.log(arrTwo);