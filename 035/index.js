let addition = function(a, b){
    return a + b;
}

let subtraction = function(a, b){
    return a - b;
}

let multiplication = function(a, b){
    return a * b;
}

let division = function(a, b){
    return a / b;
}

function calculator(numOne, numTwo, add, sub, mul, div){
    let addResult = add(numOne, numTwo);
    let subResult = sub(numOne, numTwo);
    let mulResult = mul(numOne, numTwo);
    let divResult = div(numOne, numTwo);
    return `Add: ${addResult}, Sub: ${subResult}, Mul: ${mulResult}, Div: ${divResult}`;
}

console.log(calculator(5, 10, addition, subtraction, multiplication, division));