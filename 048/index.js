// let subHeading = document.querySelector(".sub-heading");
// console.log(subHeading.innerText);
// subHeading.innerText += "--- Updated Sub Heading! ---";
// console.log(subHeading.innerText);


// let liHead = document.querySelectorAll("ul.top-nav li");
// liHead.forEach((element) => {
//     element.innerText += "--";
// });


let subHeading = document.querySelector("ul.top-nav");
subHeading.innerHTML = "<li>Register</li>" + subHeading.innerHTML;