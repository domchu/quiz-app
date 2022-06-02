const quizData = [
  {
    question: "how old is Mr Dominic ?",
    a: "12",
    b: "27",
    c: "45",
    d: "105",
    correct: "c",
  },
  {
    question: "what is the most popular programming language in the world ?",
    a: "javascript",
    b: "c++",
    c: "python",
    d: "java",
    correct: "a",
  },
  {
    question: "who is the president of Nigeria ?",
    a: "Goodluck Jonathan",
    b: "Muhammedu Buhari",
    c: "ochu dominic",
    d: "peter Obi",
    correct: "b",
  },
];
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
let currentQuiz = 0;
loadQuiz();

function loadQuiz(params) {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;

  currentQuestion++;
}
