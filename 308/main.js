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
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });