class User {
    constructor(username, age){
        this.username = username;
        this.age = age;
    }
}

const userOne = new User("shubham", 25);
console.log(userOne.username);

const userTwo = new User("alex", 30);
console.log(userTwo.username);

const userThree = new User("deepak", 20);
console.log(userThree.username);