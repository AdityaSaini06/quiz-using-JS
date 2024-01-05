// const mcq=document.getElementById("buttons")
// // console.log(button1)
// const answer1=button1.textContent
// // console.log(answer1)
// button1.onclick=(event)=>{
//     event.target.style.backgroundColor="palegreen"
// }
// // console.log(mcq)
// button2.onclick=(event)=>{
//     event.target.style.backgroundColor="red"
// }
// button3.onclick=(event)=>{
//     event.target.style.backgroundColor="red"
// }
// button4.onclick=(event)=>{
//     event.target.style.backgroundColor="red"
// }

const quizQuestions = [
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Southern Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Gobi Desert", "Antarctica", "Arabian Desert"],
    answer: "Antarctica",
  },
  {
    question: "Which famous scientist developed the theory of evolution?",
    options: [
      "Isaac Newton",
      "Charles Darwin",
      "Galileo Galilei",
      "Marie Curie",
    ],
    answer: "Charles Darwin",
  },
  {
    question: "In what year did the United States declare its independence?",
    options: ["1776", "1789", "1800", "1812"],
    answer: "1776",
  },
  {
    question: "What is the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    answer: "Nile River",
  },
  {
    question: "Who is known as the 'Father of Computer Science'?",
    options: ["Bill Gates", "Alan Turing", "Steve Jobs", "Ada Lovelace"],
    answer: "Alan Turing",
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    question: "Which continent is home to the most countries?",
    options: ["Asia", "Africa", "Europe", "South America"],
    answer: "Africa",
  },
  {
    question: "Who wrote the play 'Hamlet'?",
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Fyodor Dostoevsky",
      "Homer",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Osmium", "Oxygen", "Ozone", "Onium"],
    answer: "Oxygen",
  },
];

const button1 = document.getElementById("btn-1");
const button2 = document.getElementById("btn-2");
const button3 = document.getElementById("btn-3");
const button4 = document.getElementById("btn-4");
const questionsSeq = document.querySelector(".questions");
const progress_report = document.querySelector(".progressReport");
const score_card = document.querySelector(".scoreCard");
const question_number = document.querySelector(".questionNumber");
// console.log(scorecard)
const question_1 = document.querySelector(".question1");

let currquestion = 0;
let score = 0;

function switchquestion() {
  reset();
  questionsSeq.innerHTML = quizQuestions[currquestion].question;
  button1.innerHTML = quizQuestions[currquestion].options[0];
  button2.innerHTML = quizQuestions[currquestion].options[1];
  button3.innerHTML = quizQuestions[currquestion].options[2];
  button4.innerHTML = quizQuestions[currquestion].options[3];

  let questionvalue = currquestion + 1;
  question_number.textContent = questionvalue;
  progress_report.textContent = questionvalue;
  score_card.textContent = score;
}

function check(event) {
  const userAnswer = event.target.textContent;
  //   console.log(useranswer)

  if (quizQuestions[currquestion].answer == userAnswer) {
    score = score + 10;
    event.target.style.backgroundColor = "palegreen";
  } else {
    event.target.style.backgroundColor = "red";
  }

  // currquestion++;
  const setQuestion = () => {
    reset();
    currquestion++;
    if (currquestion < quizQuestions.length) {
      switchquestion();
    } else {
      endquiz();
    }
  };
  button1.disabled =
    button2.disabled =
    button3.disabled =
    button4.disabled =
      true;

  setTimeout(() => {
    setQuestion();
    button1.disabled =
      button2.disabled =
      button3.disabled =
      button4.disabled =
        false;
  }, 1000);
}

function reset() {
  button1.style.backgroundColor = "";
  button2.style.backgroundColor = "";
  button3.style.backgroundColor = "";
  button4.style.backgroundColor = "";
}

function endquiz() {
  question_1.innerHTML = "Quiz Completed!!";
  button1.style.display = "none";
  button2.style.display = "none";
  button3.style.display = "none";
  button4.style.display = "none";
  score_card.textContent = `${score} out of ${quizQuestions.length * 10}`;
}

switchquestion();
button1.addEventListener("click", (event) => check(event));
button2.addEventListener("click", (event) => check(event));
button3.addEventListener("click", (event) => check(event));
button4.addEventListener("click", (event) => check(event));
