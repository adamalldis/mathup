const num1El = document.querySelector(".num1");
const num2El = document.querySelector(".num2");
const answerEl = document.querySelector(".answer");

// input buttons
const 
button0 = document.querySelector("#button0"),
button1 = document.querySelector("#button1"),
button2 = document.querySelector("#button2"),
button3 = document.querySelector("#button3"),
button4 = document.querySelector("#button4"),
button5 = document.querySelector("#button5"),
button6 = document.querySelector("#button6"),
button7 = document.querySelector("#button7"),
button8 = document.querySelector("#button8"),
button9 = document.querySelector("#button9"),
enterEl = document.querySelector("#button-enter"),
deleteEl = document.querySelector("#button-delete");

// for (let i = 0; i < 10; i++) {
//   const button + i = document.querySelector("#button0");
//   }

// listen for clicks on each button
button0.addEventListener("click", function() { answerEl.value += 0; });
button1.addEventListener("click", function() { answerEl.value += 1; });
button2.addEventListener("click", function() { answerEl.value += 2; });
button3.addEventListener("click", function() { answerEl.value += 3; });
button4.addEventListener("click", function() { answerEl.value += 4; });
button5.addEventListener("click", function() { answerEl.value += 5; });
button6.addEventListener("click", function() { answerEl.value += 6; });
button7.addEventListener("click", function() { answerEl.value += 7; });
button8.addEventListener("click", function() { answerEl.value += 8; });
button9.addEventListener("click", function() { answerEl.value += 9; });

// get a random numbers from 0-9 for both parts of the equation
function setNumbers() {
  if (gameOver === true) {
    alert("The game is over!")
  } else {
    num1El.value = Math.floor(Math.random() * 10);
    num2El.value = Math.floor(Math.random() * 10);
    answerEl.value = null;
  }
}

// set the guess limit
let guesses = 2;

// input answer and see if its correct
enterEl.addEventListener("click", function() {
  if (Number(answerEl.value) === Number(num1El.value) + Number(num2El.value) && gameOver === false) {
    modalCorrect.classList.add("modal-visible");
  } else if (guesses > 0) {
    modalIncorrect.classList.add("modal-visible");
      if (guesses > 1) {
        guessesLeft.textContent = guesses + " guesses left.";
      } else {
        guessesLeft.textContent = guesses + " guess left.";        
      }
    answerEl.value = null;
  } else {
    modalAnswerGiven.classList.add("modal-visible");
    answerGiven.textContent = "The answer was " + (Number(num1El.value) + Number(num2El.value));
    guesses = 3;
  }
  }
);

// initialize the footer stats
let 
scoreCorrectNum = 0,
scoreIncorrectNum = 0,
scoreRemainingNum = 1,
gameOver = false;

const 
scoreCorrectEl = document.querySelector("#score-correct"),
scoreIncorrectEl = document.querySelector("#score-incorrect"),
scoreRemainingEl = document.querySelector("#score-remaining");

scoreCorrectEl.textContent = "CORRECT: " + scoreCorrectNum;
scoreIncorrectEl.textContent = "INCORRECT: " + scoreIncorrectNum;
scoreRemainingEl.textContent = "QUESTION: " + scoreRemainingNum + " / 10";


// updates the question counter
function updateStats() {
  if (scoreRemainingNum < 3) {
    scoreRemainingNum++;
    scoreCorrectEl.textContent = "CORRECT: " + scoreCorrectNum;
    scoreIncorrectEl.textContent = "INCORRECT: " + scoreIncorrectNum;
    scoreRemainingEl.textContent = "QUESTION: " + scoreRemainingNum + " / 10";
  } else {
    gameOver = true;
  }
}

// delete mistakes (there must be a better way to do this)
deleteEl.addEventListener("click", function() {
  let deleteNum = answerEl.value;
  deleteNum = deleteNum.split("");
  deleteNum.pop();
  deleteNum = deleteNum.join("");
  answerEl.value = deleteNum;
  }
);

// MODALS

const modalCorrect = document.querySelector("#modal-correct");
const modalIncorrect = document.querySelector("#modal-incorrect");
const modalAnswerGiven = document.querySelector("#modal-answer-given");
const nextBtn = document.querySelector("#correct-next-btn");
const answerBtn = document.querySelector("#answer-next-btn");
const tryAgainBtn = document.querySelector("#try-again");
const guessesLeft = document.querySelector("#guesses-left");
const answerGiven = document.querySelector("#answer-given");

nextBtn.addEventListener("click", function() {
  modalCorrect.classList.remove("modal-visible");
  scoreCorrectNum++;
  updateStats();
  setNumbers();
});

tryAgainBtn.addEventListener("click", function() {
  modalIncorrect.classList.remove("modal-visible");
  guesses--;
});

answerBtn.addEventListener("click", function() {
  modalAnswerGiven.classList.remove("modal-visible");
  scoreIncorrectNum++;
  updateStats();
  setNumbers();
});

// THIS IS HOW YOU ADD AND REMOVE A CLASS FROM AN HTML ELEMENT (modal is the ID)
// modal.classList.add("modal-visible");
// modal.classList.remove("modal-visible");



// initialize the game
setNumbers(); // num1El.value; num2El.value; answerEl.value = null;