let firstName = "Shubham";
let lastName = "Sarda";
let videos = 10;
let subscriber = 4500;

// let result = "Youtube Channel " + firstName + " " + lastName + " has " + videos + " videos and " + subscriber + " subscribers!";
// console.log(result); 

// let result = `Youtube Channel ${firstName} ${lastName} has ${videos} videos and ${subscriber} subscriber!`;
// console.log(result);

let htmlTemplate = `<h1>${firstName} ${lastName}</h1>
<p>Videos: ${videos}</p>
<p>Subscribers: ${subscriber}</p>`;

console.log(htmlTemplate);