let user = {
    name: "Shubham Sarda",
    email: "shubham@gmail.com",
    age: 25,
    isLoggedIn: false,
    login: function(){
        this.isLoggedIn = true;
        return `LOGGED IN - ${this.isLoggedIn} - ${this.email}`;
    },
    logout: function(){
        this.isLoggedIn = false;
        return `LOGGED OUT - ${this.isLoggedIn}`;
    }
};


console.log(user.login());
console.log(user.logout());
console.log(this);