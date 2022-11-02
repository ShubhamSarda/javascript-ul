import connect, { username, age, disconnect } from "./config.js";
import { convert as conversion } from "./helper.js";

console.log(username, age);
console.log(connect());
console.log(disconnect());

const currency = conversion(10);
console.log(currency);