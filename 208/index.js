const data = [
    {username: "shubham", age: 25},
    {username: "john", age: 29},
];

localStorage.setItem("data", JSON.stringify(data));

const accessData = JSON.parse(localStorage.getItem("data"));
console.log(accessData);