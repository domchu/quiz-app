const quizData = [
  {
    question: "There are ----- types of data types in Javascript ?",
    a: "5",
    b: "4",
    c: "3",
    d: "2",
    correct: "d",
  },
  {
    question: "What is the most popular programming language in the world ?",
    a: "Javascript",
    b: "C++",
    c: "Python",
    d: "Java",
    correct: "a",
  },
  {
    question: "There are ----- types of loops in javascript.",
    a: "5",
    b: "4",
    c: "3",
    d: "2",
    correct: "a",
  },
  {
    question: "What year was javascript launched ?",
    a: "1994",
    b: "1995",
    c: "1996",
    d: "1997",
    correct: "b",
  },
  {
    question:
      "What is the relationship/connection between the FrontEnd and BackedEnd guys in the IT industries ?",
    a: "HTML/CSS",
    b: "JSON",
    c: "CSS/API",
    d: "React.JS",
    correct: "b",
  },
  {
    question: "What is the output of this code: console.log(4 === 1) ?",
    a: "True",
    b: "False",
    c: "Both A & B",
    d: "None of the above",
    correct: "a",
  },
  {
    question:
      "How do we refresh a page without ctrl+R, fn+F5 or click on refresh icon ?",
    a: "page.load()",
    b: "refresh.reload()",
    c: "location.load()",
    d: "all of the above",
    correct: "c",
  },
  {
    question: "What is the output of these code; console.log(true + true) ?",
    a: "True",
    b: "False",
    c: "1",
    d: "2",
    correct: "d",
  },
  {
    question:
      "What is the output of these code; console.log([1, 2] == [1, 2]), console.log([1, 2] === [1, 2]) ?",
    a: "True, True",
    b: "False, True",
    c: "False, False",
    d: "False, True",
    correct: "c",
  },
  {
    question: "What is the output of these array; [1, 2, 3].pop() ?",
    a: "3",
    b: "[1, 2]",
    c: "[1, 2, 3]",
    d: "[3]",
    correct: "b",
  },
];

// selecting all classes or parameter from the html file
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
let currentQuiz = 0;
let score = 0;
loadQuiz();

// loading all the questions to the Dom
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

// checked for the correct answer/select
function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
// function to deselect the answer to the next question
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// the button section of the quiz app
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You scored  ${score} out of  ${quizData.length} questions. <button onclick="location.reload()" style="margin-top:14px">Reload</button> </h2>`;
    }
  }
});
