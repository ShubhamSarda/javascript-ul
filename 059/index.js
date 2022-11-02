const form = document.querySelector(".feedback-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(form.username.value);
    console.log(form.feedback.value);
})