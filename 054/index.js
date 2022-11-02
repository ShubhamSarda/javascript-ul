const products = document.querySelectorAll("li");
products.forEach(product => {
    product.addEventListener("click", (event) => {
        event.target.remove();
        console.log(event.target.textContent);
    })
});

// const addProduct = document.querySelector("ul");
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//     addProduct.innerHTML += "<li>New Product</li>"
//     console.log(addProduct.innerHTML);
// });

const addProduct = document.querySelector("ul");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const newLi = document.createElement("li");
    newLi.innerText = "New Product";
    addProduct.prepend(newLi);
    console.log(addProduct.innerHTML);
});