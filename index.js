// doc objects initiasation
const form = document.querySelector(".quiz-form");
const questions = form.querySelectorAll(".question");
const result = document.querySelector(".result");

//reference/correct anwsers 
const correctAnswers = ['B','D','C','B','A'];
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
})