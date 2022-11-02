const numbers = [70, 50, 90, 80, 25, 35];

const result = numbers
                .reverse()
                .filter(num => num > 75)
                .map(num => num + 5);

console.log(result);