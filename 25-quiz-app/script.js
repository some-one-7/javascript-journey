const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

// Questions
const quiz = [
  {
    question: "What is JS?",
    options: ["Language", "Car", "Animal"],
    answer: "Language"
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5"],
    answer: "4"
  },
  {
    question: "HTML stands for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  }
];

let currentIndex = 0;
let score = 0;

// Load Question
function loadQuestion() {
  const current = quiz[currentIndex];
  questionEl.innerText = current.question;

  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    let btn = document.createElement("button");
    btn.innerText = option;

    btn.addEventListener("click", () => checkAnswer(option));

    optionsEl.appendChild(btn);
  });
}

// Check Answer
function checkAnswer(selected) {
  if (selected === quiz[currentIndex].answer) {
    score++;
  }
}

// Next Question
nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex < quiz.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Show Result
function showResult() {
  questionEl.innerText = "Quiz Finished!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.innerText = `Score: ${score}/${quiz.length}`;
}

// Start
loadQuestion();
