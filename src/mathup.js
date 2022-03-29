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
enterEl = document.querySelector("#button-enter");
deleteEl = document.querySelector("#button-delete");

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
  if (gameOver === false) {
    num1El.value = Math.floor(Math.random() * 10);
    num2El.value = Math.floor(Math.random() * 10);
    answerEl.value = null;
  } else {
    alert("The game is over!")
  }
}

// set the guess limit
let guesses = 3;

// input answer and see if its correct
enterEl.addEventListener("click", function() {
  if (Number(answerEl.value) === Number(num1El.value) + Number(num2El.value)) {
    alert("That is CORRECT!")
    updateStats();
    setNumbers();
  } else if (guesses > 1){
    guesses--;
    alert("Sorry, that is incorrect. You have " + guesses + " guesses left.");
    answerEl.value = null;
  } else {
    alert("Sorry, the answer is: " + (Number(num1El.value) + Number(num2El.value)));
    updateStats();
    setNumbers();
    guesses = 3;
  }
  }
);

// initialize the footer stats
const 
scoreCorrectEl = document.querySelector("#score-correct"),
scoreIncorrectEl = document.querySelector("#score-incorrect"),
scoreRemainingEl = document.querySelector("#score-remaining");

let 
scoreCorrectNum = 0,
scoreIncorrectNum = 0,
scoreRemainingNum = 0,
gameOver = false;

scoreCorrectEl.textContent = "CORRECT: " + scoreCorrectNum;
scoreIncorrectEl.textContent = "INCORRECT: " + scoreIncorrectNum;
scoreRemainingEl.textContent = "QUESTION: " + scoreRemainingNum + " / 10";


// updates the question counter
function updateStats() {
  if (scoreRemainingNum < 3) {
    scoreRemainingNum++;
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






// initialize the game
setNumbers(); // num1El.value; num2El.value; answerEl.value = null;