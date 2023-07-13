var startBtnEl = document.getElementById("start-btn");
var introSectionEl = document.getElementById("intro-section");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var questionSectionEl = document.getElementById("question-section");
var titleEl = document.getElementById("title");
var choicesEl = document.querySelectorAll(".choices");
var initialsInput = document.getElementById("initials-input");
var initialsSectionEl = document.getElementById("initials-section");
var saveBtn = document.getElementById("save-btn");
var questionIndex = 0;
var setIntervalId = 0;
var score = 0;

var questionsArray = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "curly brackets"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console log"],
    answer: "console log"
  }
];

var timeLeft = questionsArray.length * 15;

function startQuiz() {
  introSectionEl.classList.add("hide");
  questionSectionEl.classList.remove("hide");
  setIntervalId = setInterval(countDown, 1000);
  showQuestions();
}

function countDown() {
  timerEl.textContent = timeLeft--;
  if (timeLeft === 0) {
    clearInterval(setIntervalId);
  }
}

function showQuestions() {
  var currentQuestion = questionsArray[questionIndex];
  titleEl.textContent = currentQuestion.title;
  for (var i = 0; i < choicesEl.length; i++) {
    choicesEl[i].textContent = currentQuestion.choices[i];
  }
}

function checkValue(event) {
  var selectedChoice = event.target.textContent;
  var currentQuestion = questionsArray[questionIndex];
  if (selectedChoice === currentQuestion.answer) {
    score += 20;
  } else {
    timeLeft -= 10;
  }

  if (questionIndex < questionsArray.length - 1) {
    questionIndex++;
    showQuestions();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(setIntervalId);
  questionSectionEl.classList.add("hide");
  initialsSectionEl.classList.remove("hide");
  scoreEl.textContent = score;
}

startBtnEl.addEventListener("click", startQuiz);
choicesEl.forEach(function (choice) {
  choice.addEventListener("click", checkValue);
});