let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (a, b) => Math.abs(a - b);

const compareGuesses = (human, computer, easter = generateTarget()) => {
  if (human > 9) {
    window.alert("please enter a number between 0 and 9");
  } else if (
    getAbsoluteDistance(human, easter) > getAbsoluteDistance(computer, easter)
  ) {
    return false;
  } else {
    return true;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};
