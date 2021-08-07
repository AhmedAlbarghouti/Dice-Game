let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const playBtn = document.getElementById("play-btn");
const startCont = document.getElementById("start-cont");
const gameCont = document.getElementById("game-cont");
const rollBtn = document.getElementById("roll-btn");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const dice = document.getElementById("dice");
const message = document.getElementById("message");
const resetBtn = document.getElementById("reset-btn");



playBtn.addEventListener("click", function () {
  startCont.classList.remove("active-container");
  startCont.classList.add("inactive-container");

  gameCont.classList.remove("inactive-container");
  gameCont.classList.add("active-container");
});

rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.textContent = randomNumber;
  if (player1Turn) {
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    message.textContent = "Player 2 Turn"
  } else {
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    message.textContent = "Player 1 Turn"
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 Won 🥳";
    showResetButton();
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 Won 🎉";
    showResetButton();
  }

  player1Turn = !player1Turn;
  console.log(player1Turn);
});

resetBtn.addEventListener("click", function(){
  reset()
})

function reset() {
  player1Score = 0
  player2Score = 0
  player1Turn = true
  player1Scoreboard.textContent = "-"
  player2Scoreboard.textContent = "-"
  dice.textContent = "-"
  message.textContent = "Player 1 Turn"
  resetBtn.style.display = "none"
  rollBtn.style.display = "block"

}

function showResetButton(){
  rollBtn.style.display = "none"
  resetBtn.style.display = "block"
}
