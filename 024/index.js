let password = "12345678";
if(password.length >= 8 && password.includes("@")){
    console.log("STRONG");
} else {
    console.log("WEAK");
}


// let password = "1234567@";
// if(password.length >= 12 || password.length >= 8 && password.includes("@")){
//     console.log("STRONG");
// } else if(password.length >= 5 && password.length <= 8){
//     console.log("MEDIUM");
// } else {
//     console.log("WEAK");
// }