let userGuess = [];

// target gameAreaEl
const gameAreaEl = document.getElementById("gameArea");
// target newGameButtonEl

const newGameButtonEl = document.getElementById("newGameButton");
// target welcomScreenEl

const welcomScreenEl = document.querySelector("#welcomScreen");
// target userGuessUpdata

const userGuessUpdata = document.querySelector("#userNumberUpdata");
// target userNumberUpdata

const userNumberUpdata = document.querySelector("#inputBox");
// const attemptsEl = document.querySelector("#attempts");

let audioEl = new Audio("ting.mp3");

//init call funciton on body
const init = () => {
  computerGuess = Math.round(Math.random() * 100);
  console.log(computerGuess);
  gameAreaEl.style.display = "none";
  newGameButtonEl.style.display = "none";
};

// start game
const startGame = () => {
  gameAreaEl.style.display = "block";
  welcomScreenEl.style.display = "none";
};

//gamereloade

const gamereloade = () => {
  window.location.reload();
};

//startNewGame

const startNewGame = () => {
  audioEl.play();
  newGameButtonEl.style.display = "block";
  userNumberUpdata.setAttribute("disabled", true);
};

// main logi of our app
const campareGuess = () => {
  audioEl.play();
  const userNumber = Number(document.querySelector("#inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.querySelector("#guesses").innerText = userGuess;
  userNumberUpdata.value = "";

  //check condition true or false this is main logic of this game

  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdata.innerText = "Your Number is High 🙄";
    } else if (userNumber < computerGuess) {
      userGuessUpdata.innerText = "Your Number is Low 😟";
    } else {
      userGuessUpdata.innerText = ` ${computerGuess} it's Correct ! 😚`;
      startNewGame();
    }
  } else {
    if (userNumber > computerGuess) {
      userGuessUpdata.innerText = `You loose !! correct num was ${computerGuess}`;
      startNewGame();
    } else if (userNumber < computerGuess) {
      userGuessUpdata.innerText = `You loose !! correct num was ${computerGuess}`;

      startNewGame();
    } else {
      userGuessUpdata.innerText = ` ${computerGuess} it's Correct ! 😚`;

      startNewGame();
    }
  }

  document.querySelector("#attempts").innerText = userGuess.length;
};

// easyMode
const easyMode = () => {
  audioEl.play();
  startGame();
  maxGuess = 10;
};

// hardMode
const hardMode = () => {
  audioEl.play();
  startGame();
  maxGuess = 5;
};
