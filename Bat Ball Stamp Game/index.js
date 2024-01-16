let scoreStr = localStorage.getItem("Score");

function resetScore(scoreStr) {
  score = {
    win: 0,
    lost: 0,
    tie: 0,
    displayScore: function () {
      return `Score: Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
    },
  };
}
let score = JSON.parse(scoreStr) || {
  win: 0,
  lost: 0,
  tie: 0,
};

//Method for Showing result into score Object..Functions inside an object are called methods.
score.displayScore = function () {
  return `Score: Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
};

let computerChoice;

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;

  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = "Ball";
  } else {
    computerChoice = "Stump";
  }
}

let resultMsg;
function result(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Bat") {
      resultMsg = "It's a Tie...😊";
      score.tie++;
    } else if (computerMove === "Ball") {
      resultMsg = "You Won.... 🏆 ";
      score.win++;
    } else {
      resultMsg = "You Lost...🥺";
      score.lost++;
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Bat") {
      resultMsg = "You Lost....🥺";
      score.lost++;
    } else if (computerMove === "Ball") {
      resultMsg = "Its a tie😊";
      score.tie++;
    } else {
      resultMsg = "You Won....🏆";
      score.win++;
    }
  } else {
    if (computerMove === "Bat") {
      resultMsg = "You Won....🏆";
      score.win++;
    } else if (computerMove === "Ball") {
      resultMsg = "You Lost....🥺";
      score.lost++;
    } else {
      resultMsg = "Its a Tie😊";
      score.tie++;
    }
  }
}

function showResult(userMove, computerMove, result) {
  localStorage.setItem("Score", JSON.stringify(score));

  document.querySelector("#userData").innerText = userMove
    ? `You have Choose- ${userMove}`
    : "";
  document.querySelector("#computerData").innerText = computerMove
    ? `Computer Choice- ${computerMove}`
    : "";
  document.querySelector("#showResult").innerHTML = result || "";
  document.querySelector("#score").innerHTML = score.displayScore();
}
