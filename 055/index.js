const addProduct = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "New Product";
    addProduct.append(li);
})

addProduct.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        event.target.remove();
    }
})

// const newLi = document.querySelector(".active");
// newLi.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("LI Called")
// });