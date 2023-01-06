const paperCom = document.getElementById("paperImgC");
const rockCom = document.getElementById("rockImgC");
const scissorsCom = document.getElementById("scissorsImgC");
const paperU = document.getElementById("paperImgU");
const rockU = document.getElementById("rockImgU");
const scissorsU = document.getElementById("scissorsImgU");
const result = document.getElementById("result");
const playBtn = document.getElementById("playBtn");
const refresh = document.getElementById("refresh");

const reLoad = () => {
  window.location.reload();
};

const sawResult = (mesg) => {
  result.innerText = mesg;
};

const reload = () => {
  setTimeout(() => {
    location.reload();
  }, 2000);
};

const playGame = () => {
  //Take computer input
  const computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
  let computerCh = "";

  switch (computerChoice) {
    case 1:
      computerCh = "rock";
      break;
    case 2:
      computerCh = "paper";
      break;
    case 3:
      computerCh = "scissors";
      break;
    default:
      console.log(`number out of bound`);
  }
  console.log(`${computerChoice} ${computerCh}`);
  // 1-rock
  // 2-paper
  // 3-scissors

  //user choice
  let userChoice = prompt("Enter your choice Rock,Paper,Scissors");
  userChoice = userChoice.toLocaleLowerCase();
  // console.log(`user choice ${userChoice}`);

  if (
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissors"
  ) {
    //   console.log(`Enter a valid input`);
    sawResult("Error! Enter a valid choice rock,paper,scissors");
    //   console.log(userChoice);
  } else {
    switch (computerCh) {
      case "rock":
        if (userChoice === "rock") {
          rockCom.style.display = "block";
          rockU.style.display = "block";
          sawResult("Draw");
        } else if (userChoice === "paper") {
          rockCom.style.display = "block";
          paperU.style.display = "block";
          sawResult("You win");
        } else if (userChoice === "scissors") {
          rockCom.style.display = "block";
          scissorsU.style.display = "block";
          sawResult("Computer win");
        }
        reload();
        break;
      case "paper":
        if (userChoice === "paper") {
          paperCom.style.display = "block";
          paperU.style.display = "block";
          sawResult("Draw");
        } else if (userChoice === "rock") {
          paperCom.style.display = "block";
          rockU.style.display = "block";
          sawResult("Computer Win");
        } else if (userChoice === "scissors") {
          paperCom.style.display = "block";
          scissorsU.style.display = "block";
          sawResult("You win");
        }
        reload();
        break;
      case "scissors":
        if (userChoice === "scissors") {
          scissorsCom.style.display = "block";
          scissorsU.style.display = "block";
          sawResult("Draw");
        } else if (userChoice === "rock") {
          scissorsCom.style.display = "block";
          rockU.style.display = "block";
          sawResult("You win");
        } else if (userChoice === "paper") {
          scissorsCom.style.display = "block";
          paperU.style.display = "block";
          sawResult("Computer win");
        }
        reload();
        break;
    }
  }
};

playBtn.addEventListener("click", () => {
  playGame();
});

// refresh.addEventListener("click", () => {
//   location.reload();
// });
