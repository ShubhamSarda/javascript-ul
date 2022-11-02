const correctAnswer = ["A", "A", "A", "A", "A"];
const form = document.querySelector(".quiz-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            score += 1;
        }
    });
    console.log(score);
});