let user = {
    name: "Shubham Sarda",
    email: "shubham@gmail.com",
    age: 25,
    isLoggedIn: false,
    blogs: [
        {title: "BLOG 1", numComment: 5, wordCount: 570}, 
        {title: "BLOG 2", numComment: 7, wordCount: 1257}
    ],
    allBlogConsole: function(){
        this.blogs.forEach(blog => console.log(blog.title));
    },
    login: function(){
        this.isLoggedIn = true;
        return `LOGGED IN - ${this.isLoggedIn} - ${this.email}`;
    },
    logout: function(){
        this.isLoggedIn = false;
        return `LOGGED OUT - ${this.isLoggedIn}`;
    }
};

console.log(user.blogs[0]);
user.allBlogConsole();