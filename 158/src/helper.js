import {convertKmToM, convertMToKm, convertKgToG, convertGToKg} from "./converter.js";
import {add, sub, multiply, divide} from "./calculation.js";

export const welcome = (user) => {
    console.log(`Welcome ${user}`);
}

export const updatePara = (text) => {
    const p = document.querySelector("p");
    p.textContent = `${text}`;
}