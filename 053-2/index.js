const products = document.querySelectorAll("li");
products.forEach(product => {
    product.addEventListener("click", (event) => {
        event.target.style.textDecoration = "line-through";
        console.log(event.target.textContent);
    })
});