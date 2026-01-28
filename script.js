//accessing elements
const buttons = document.querySelectorAll("#btn");
const userDisplay = document.getElementById("user-display");
const computerDisplay = document.getElementById("computer-display");
const resultText = document.getElementById("result-text");
//logic
const computerChoice = () => {
  let options = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);
  return options[choice];
};
const determineOutcome = (getcomputerChoice, userChoice) => {
  //same choice, draw
  if (getcomputerChoice === userChoice) {
    return "Draw";
  }

  // User wins if they choose paper against rock
  else if (getcomputerChoice === "Rock" && userChoice === "Paper") {
    return "Win";
  }
  // User wins if they choose scissors against paper
  else if (getcomputerChoice === "Paper" && userChoice === "Scissors") {
    return "Win";
  }
  // User wins if they choose rock against scissors
  else if (getcomputerChoice === "Scissors" && userChoice === "Rock") {
    return "Win";
  }

  // If none of the above conditions are met, the user loses
  else {
    return "Lose";
  }
};
//imagemaps
const imageMap = {
  Rock: "assets/download.png",
  Paper: "assets/paper.png",
  Scissors: "assets/scissor.png",
};
const wins = document.getElementById("wins");
const losses = document.getElementById("losses");
const draws = document.getElementById("draws");
//value initialization of  the win.loss,draw counts
let winCount = 0;
let lossCount = 0;
let drawCount = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //get user choice from data attribute
    const userChoice = button.getAttribute("data-choice");
    //get computer choice from function above
    const getcomputerChoice = computerChoice();
    //determine outcome of the game
    const result = determineOutcome(getcomputerChoice, userChoice);
    //frontend display
    userDisplay.innerHTML = `<img src=${imageMap[userChoice]} class="w-24 h-24 mx-auto mb-4" /> `;
    computerDisplay.innerHTML = `<img src=${imageMap[getcomputerChoice]} class="w-24 h-24 mx-auto mb-4" /> `;
    resultText.innerHTML =
      result === "Draw" ? "IT'S A DRAW" : `YOU ${result.toUpperCase()}!`;
    //increase the scores
    if (result === "Win") {
      winCount++;
      wins.textContent = winCount;
    } else if (result === "Lose") {
      lossCount++;
      losses.textContent = lossCount;
    } else {
      drawCount++;
      draws.textContent = drawCount;
    }

    //can be improved with css classes
    resultText.className =
      "font-bold " +
      (result === "Win"
        ? "text-green-600 text-2xl"
        : result === "Lose"
          ? "text-red-600 text-2xl"
          : "text-gray-600 text-2xl");
  });
});
