const usernamePattern = /^[a-z0-9]{6,10}$/;
const feedbackPattern = /^.{20,50}$/;

function displayData(event){
    event.preventDefault();
    console.log(event);
}

function usernameValidation(event){
    const userResult = usernamePattern.test(event.target.value);
    if(userResult){
        event.target.setAttribute("class", "accepted");
    } else {
        event.target.setAttribute("class", "rejected");
    }
}

function feedbackValidation(event){
    const feedbackResult = feedbackPattern.test(event.target.value);
    if(feedbackResult){
        event.target.setAttribute("class", "accepted");
    } else {
        event.target.setAttribute("class", "rejected");
    }
}

function changeText(event){
    event.target.innerText = "New Value";
}