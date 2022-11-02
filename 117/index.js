const userOne = {
    userName: "shubham",
    fullName: "Shubham Sarda",
    email: "shubham@gmail.com",
    age: 25,
    login(){
        console.log("LOGIN");
    },
    logout(){
        console.log("LOGOUT");
    }
};
console.log(userOne.age);
console.log(userOne.email);
userOne.login();


const userTwo = {
    userName: "alex",
    fullName: "Alex Pace",
    email: "alex@gmail.com",
    age: 30,
    login(){
        console.log("LOGIN");
    },
    logout(){
        console.log("LOGOUT");
    }
}
console.log(userTwo.age);
console.log(userTwo.email);
userTwo.login();


// const userFive = new User("shubham", "Shubham Sarda", "shubham@gmail.com", 25);
// console.log(userFive.userName);