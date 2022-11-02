function User(username, age){
    this.username = username;
    this.age = age;
    this.active = false;
}

User.prototype.login = function(){
    this.active = true;
    return this;
}

User.prototype.logout = function(){
    this.active = false;
    return this;
}

User.prototype.display = function(){
    if(this.active){
        console.log(`Username: ${this.username}, Age: ${this.age}`);
    } else {
        console.log("Please login first!");
    }
}

function Student(username, age, semester, rank){
    User.call(this, username, age);
    this.semester = semester;
    this.rank = rank;
}

Student.prototype = Object.create(User.prototype);

Student.prototype.updateRank = function(newRank){
    this.rank = newRank;
    console.log("Updated Rank:", this.rank);
}

Student.prototype.display = function(){
    if(this.active){
        console.log(`Username: ${this.username}, Age: ${this.age}, Semester: ${this.semester}, Rank: ${this.rank}`);
    } else {
        console.log("Please login first!");
    }
}

console.log(User.prototype);
console.log(Student.prototype);

const userOne = new User("shubham", 25);
console.log("userOne:", userOne.username);
userOne.logout();

const studentOne = new Student("john", 60, 5, 10);
console.log("studentOne:", studentOne.username);
studentOne.updateRank(15);


// class User {
//     constructor(username, age){
//         this.username = username;
//         this.age = age;
//         this.active = false;
//     }
//     login(){
//         this.active = true;
//         return this;
//     }
//     logout(){
//         this.active = false;
//         return this;
//     }
//     display(){
//         if(this.active){
//             console.log(`Username: ${this.username}, Age: ${this.age}`);
//         } else {
//             console.log("Please login first!");
//         }
//     }
// }

// class Student extends User{
//     constructor(username, age, semester, rank){
//         super(username, age);
//         this.semester = semester;
//         this.rank = rank;
//     }
//     updateRank(newRank){
//         this.rank = newRank;
//         console.log(this.rank);
//     }
//     display(){
//         if(this.active){
//             console.log(`Username: ${this.username}, Age: ${this.age}, Semester: ${this.semester}, Rank: ${this.rank}`);
//         } else {
//             console.log("Please login first!");
//         }
//     }
// }

// const userOne = new User("shubham", 25);
// userOne.login().display();

// const studentOne = new Student("john", 60, 5, 10);
// studentOne.login().display();