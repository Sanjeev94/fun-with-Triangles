const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswer = ["90°", "right angled"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    // console.log(formResults);
    for(let value of formResults.values()) {
        // console.log(value);
        if(value === correctAnswer[index])
        {
            score = score + 1;
        }
        index = index + 1;
    }
    // console.log(score);
    outputEl.innerText = "Ur score is : " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore)