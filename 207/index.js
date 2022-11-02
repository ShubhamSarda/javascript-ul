localStorage.setItem("username", "shubham");
localStorage.setItem("age", 25);

const username = localStorage.getItem("username");
const age = localStorage.getItem("age");

console.log(username, age);
console.log(typeof username, typeof age);

localStorage.age = 26;
localStorage.setItem("age", 27);

// localStorage.removeItem("username");
// localStorage.removeItem("age");

localStorage.clear();