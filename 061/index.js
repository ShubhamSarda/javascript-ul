const form = document.querySelector(".feedback-form");
const usernamePattern = /^[a-z0-9]{6,10}$/;
const feedbackPattern = /^.{20,50}$/;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userResult = usernamePattern.test(form.username.value);
    const feedbackResult = feedbackPattern.test(form.feedback.value);

    if(userResult && feedbackResult){
        console.log("Worked!");
    } else {
        console.log("Not Worked!");
    }
    
});