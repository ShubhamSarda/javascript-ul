let user = {
    name: "Shubham Sarda",
    email: "shubham@gmail.com",
    age: 25,
    isLoggedIn: false,
    login: function(nickName){
        return `LOGIN ${nickName}`;
    },
    logout: function(){
        return "LOGOUT";
    }
};

console.log(user.login("Name"));
console.log(user.logout());

let random = "RANDOM";
console.log(random.toLowerCase());