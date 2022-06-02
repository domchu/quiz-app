const quizData = [
  {
    question: "How old is Mr Dominic ?",
    a: "12",
    b: "27",
    c: "45",
    d: "105",
    correct: "c",
  },
  {
    question: "What is the most popular programming language in the world ?",
    a: "javascript",
    b: "c++",
    c: "python",
    d: "java",
    correct: "a",
  },
  {
    question: "Who is the president of Nigeria ?",
    a: "Goodluck Jonathan",
    b: "Muhammedu Buhari",
    c: "ochu dominic",
    d: "peter Obi",
    correct: "b",
  },
  {
    question: "What year was javascript launched ?",
    a: "1994",
    b: "1995",
    c: "1996",
    d: "1997",
    currect: "b",
  },
];
const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
let currentQuiz = 0;
loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}
submitBtn.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert("You finished, Get yourself a bottle of pure water");
  }
});
