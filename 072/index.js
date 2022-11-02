// const numbers = [10, 20, 30, 40, 50];
// const mapNumbers = numbers.map((num) => {
//     return num + 5;
// });
// console.log(mapNumbers);



// const numbers = [10, 20, 30, 40, 50];
// const mapNumbers = numbers.map((num) => {
//     if(num > 30){
//         return num + 5;
//     } else {
//         return num;
//     }
// });
// console.log(mapNumbers);



const products = [
    {name: "Bread", price: 25, tax: 0.05},
    {name: "Butter", price: 65, tax: 0.05},
    {name: "Water", price: 15, tax: 0},
    {name: "Material", price: 185, tax: 0.18}
];
const mapProducts = products.map((product) => {
    const newPrice = product.price + product.price*product.tax;
    return {
        name: product.name, 
        price: newPrice, 
        tax: product.tax
    }
});
console.log(mapProducts);