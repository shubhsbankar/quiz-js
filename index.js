// doc objects initiasation
const form = document.querySelector(".quiz-form");
const questions = form.querySelectorAll(".question");
const result = document.querySelector(".result");
const divShow = document.querySelectorAll(".show");
const showansBtn = document.querySelectorAll(".showans");
const explanation = document.querySelectorAll(".explanation");
console.log(explanation);

//reference/correct anwsers 
const correctAnswers = ['B','D','C','B','A'];
// ButtonToExplanation map
let butToExp = {
    show1: 0,
    show2: 1,
    show3: 2,
    show4: 3,
    show5: 4
};

// Added event listener on the form.
form.addEventListener("submit",event => {
    event.preventDefault();
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
    let score = 0;
    userAnswers.forEach((anwser,index) => {
              if (anwser === correctAnswers[index])
              {
                score++;
                questions[index].classList.remove("wrong");
                questions[index].classList.add("correct");
              }
              else{
                questions[index].classList.remove("correct");
                questions[index].classList.add("wrong");
              }
    });
    
    result.classList.remove("hide");
    result.querySelector("p").innerText = `You scored ${score}/5`;
    scrollTo(0,0);
    divShow.forEach((div) => {
        div.classList.remove("hide");
    });
    explanation.forEach((exp) => {
        exp.classList.add("hide");
    });

    showansBtn.forEach((btn) => {
        btn.setAttribute("data-button-state","true");
        btn.innerText = "Show Answer";
    });
})

// Added eventlistener on the button to show explanation
showansBtn.forEach((showans,index) => {
    showans.addEventListener("click", (event) => {
              event.preventDefault();

              if (showans.getAttribute("data-button-state") === "true")
              {
                explanation[butToExp[showans.getAttribute("id")]].classList.remove("hide");
                showans.setAttribute("data-button-state","false");
                showans.innerText = "Hide Answer";
                showans.classList.remove("showans");
                showans.classList.add("showanshide");
              }
              else{
  
                explanation[butToExp[showans.getAttribute("id")]].classList.add("hide");
                showans.setAttribute("data-button-state","true");
                showans.innerText = "Show Answer";
                showans.classList.remove("showanshide");
                showans.classList.add("showans");
              }
    });
});
