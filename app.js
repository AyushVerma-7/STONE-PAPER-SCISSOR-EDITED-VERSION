
const game = () => {
  let pScore = 0;
  let cScore = 0;


  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro a");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const playa = document.querySelector(".player-score");
    const compa = document.querySelector(".computer-score");



    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      playa.classList.add("fadeIn");
      compa.classList.add("fadeIn");


    });
  };

  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options a");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["ROCK", "PAPER", "SCISSORS"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands

          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {

    const playerScore = document.querySelector(".player-score h3");
    const computerScore = document.querySelector(".computer-score h3");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };


  const compareHands = (playerChoice, computerChoice) => {
    //Update Text

    const winner = document.querySelector(".winner h1");
    //Checking for a tie
    if (playerChoice == computerChoice) {
      winner.innerHTML = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice == "ROCK") {
      if (computerChoice == "SCISSORS") {
        winner.innerHTML = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.innerHTML = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice == "PAPER") {
      if (computerChoice == "SCISSORS") {
        winner.innerHTML = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.innerHTML = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice == "SCISSORS") {
      if (computerChoice == "ROCK") {
        winner.innerHTML = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.innerHTML = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
