let cl = console.log

let getRandomRockPaperScissors = function () {
    let rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)];
  };
  
  let getUserInput = function () {
    let userInput = process.argv[2];
    return userInput || getRandomRockPaperScissors();
  };
  
  let getWinner = function (userInput, computerInput) {
    if (userInput === computerInput) {
      return "tie";
    } else if (
      (userInput === "rock" && computerInput === "scissors") ||
      (userInput === "paper" && computerInput === "rock") ||
      (userInput === "scissors" && computerInput === "paper")
    ) {
      return "user";
    } else {
      return "computer";
    }
  };
  
  let congratulateWinner = function (winner) {
    if (winner === "user") {
      cl("You won!");
    } else if (winner === "computer") {
      cl("You lose lol");
    } else {
      cl("It's a tie!");
    }
  };
  
  let userInput = getUserInput();
let computerInput = getRandomRockPaperScissors();
cl("You chose " + userInput);
cl("Computer chose " + computerInput);
let winner = getWinner(userInput, computerInput);
congratulateWinner(winner);
