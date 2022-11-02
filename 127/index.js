class User{
    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    get fullName(){
        return `${this.first} ${this.last}`;
    }
    set fullName(newValue){
        const [first, last] = newValue.split(" ");
        this.first = first;
        this.last = last;
    }
}

const guest = new User("Shubham", "Sarda");
console.log(guest.first);
console.log(guest.last);
console.log(guest.fullName);

console.log("---")

guest.first = "SHUBHAM";
guest.fullName = "SHUBHAM SARDA";
console.log(guest.fullName);