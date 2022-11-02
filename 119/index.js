class User {
    constructor(username, age){
        this.username = username;
        this.age = age;
        this.active = false;
    }
    login(){
        this.active = true;
        return this;
    }
    logout(){
        this.active = false;
        return this;
    }
    display(){
        if(this.active){
            console.log(`Username: ${this.username}, Age: ${this.age}`);
        } else {
            console.log("Please login first!");
        }
        
    }
}

const userOne = new User("shubham", 25);
userOne.login().display();

const userTwo = new User("alex", 30);
userTwo.login();
userTwo.display();

const userThree = new User("deepak", 20);
console.log(userThree.active);
userThree.display();