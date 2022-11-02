import { username, age, connect, disconnect } from "./config.js";
import { convert } from "./helper.js";

console.log(username, age);
console.log(connect());
console.log(disconnect());

const currency = convert(10);
console.log(currency);