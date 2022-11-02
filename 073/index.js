const numbers = [10, 20, 30, 40, 50];
const reduceNumbers = numbers.reduce((total, current) => {
    total = total + current;
    return total;
}, 0);
console.log(reduceNumbers);



// const numbers = [3, 2, 1, 2, 3];
// const reduceNumbers = numbers.reduce((total, current) => {
//     total = total * current;
//     return total;
// }, 1);
// console.log(reduceNumbers);



// const students = [
//     {name: "Shubham", marks: 9}, 
//     {name: "Alex", marks: 7}, 
//     {name: "John", marks: 6},
//     {name: "Shubham", marks: 7}, 
//     {name: "Alex", marks: 9}, 
//     {name: "John", marks: 10},
//     {name: "Shubham", marks: 10}, 
//     {name: "Alex", marks: 8}, 
//     {name: "John", marks: 9},
// ];

// const reduceStudents = students.reduce((total, current) => {
//     if(current.name === "Shubham"){
//         total = total + current.marks;
//     }
//     return total;
// }, 0);

// console.log(reduceStudents);