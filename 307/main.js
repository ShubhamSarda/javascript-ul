const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});


const newsletterButton = document.querySelectorAll(".newsletter");
const modal = document.querySelector(".modal");
newsletterButton.forEach(button => {
    button.addEventListener("click", () => {
        modal.classList.add("show");
    });
});


const close = document.querySelector(".close");
close.addEventListener("click", () => {
    modal.classList.remove("show");
});


const accordions = document.querySelectorAll(".accordions .title");
accordions.forEach(accordion => {
    accordion.addEventListener("click", event => {
        event.target.classList.toggle("active");
        event.target.nextElementSibling.classList.toggle("active");
    })
});