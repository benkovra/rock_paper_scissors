function game(x){
  sessionStorage.playerChoise=x;

  var x=math.ceil(math.random()*3);

    /*sets rock as 1, paper as 2 and scissors as 3*/
  if (y == 1) {
      sessionStorage.opponentChoice = "rock"; /*sessionStorage stores memory in the browzer*/
  }
  else if (y == 2) {
      sessionStorage.opponentChoice = "paper";
  }
  else if (y == 3) {
      sessionStorage.opponentChoice = "scissors";
  }

  if ((sessionStorage.playerChoise == "rock") && (sessionStorage.opponentChoice == "paper")){
    sessionStorage.result = "lose";
  }
  else if ((sessionStorage.playerChoise == "scissors") && (sessionStorage.opponentChoice == "rock")){
    sessionStorage.result = "lose";
  }
  else if ((sessionStorage.playerChoise == "paper") && (sessionStorage.opponentChoice == "scissors")){
    sessionStorage.result = "lose";
  }
  else if ((sessionStorage.playerChoise == "paper") && (sessionStorage.opponentChoice == "rock")){
    sessionStorage.result = "win";
  }
  else if ((sessionStorage.playerChoise == "rock") && (sessionStorage.opponentChoice == "scissors")){
    sessionStorage.result = "win";
  }
  else if ((sessionStorage.playerChoise == "scissors") && (sessionStorage.opponentChoice == "paper")){
    sessionStorage.result = "win";
  }
  
  if (sessionStorage.playerChoice == sessionStorage.opponentChoice) {
    sessionStorage.result = "tie";
  }

}