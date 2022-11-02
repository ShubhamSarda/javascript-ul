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

class Student extends User{
    constructor(username, age, semester, rank){
        super(username, age);
        this.semester = semester;
        this.rank = rank;
    }
}

const studentOne = new Student("john", 60, 5, 10);
studentOne.login().display();


// const userOne = new User("shubham", 25);
// userOne.login().display();