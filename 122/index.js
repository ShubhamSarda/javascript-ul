function User(username, age){
    this.username = username;
    this.age = age;
    this.active = false;
}

User.prototype.login = function(){
    console.log("LOGIN");
}

User.prototype.logout = function(){
    console.log("LOGOUT");
}


const userOne = new User("shubham", 25);
console.log("userOne:", userOne.username);
userOne.logout();


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