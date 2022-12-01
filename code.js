function game(x){
  sessionStorage.playerChoice=x;
  let image = document.getElementById('o-img');
  var y=Math.ceil(Math.random()*3);

    /*sets rock as 1, paper as 2 and scissors as 3*/
  if (y == 1) {
      sessionStorage.opponentChoice = "rock"; /*sessionStorage stores memory in the browzer*/
      image.src = "svg/rock.svg";
  }
  else if (y == 2) {
      sessionStorage.opponentChoice = "paper";
      image.src = "svg/paper.svg";
  }
  else if (y == 3) {
      sessionStorage.opponentChoice = "scissors";
      image.src = "svg/scissors.svg";
  }

  if ((sessionStorage.playerChoice == "rock") && (sessionStorage.opponentChoice == "paper")){
    sessionStorage.result = "lose";
  }
  else if ((sessionStorage.playerChoice == "scissors") && (sessionStorage.opponentChoice == "rock")){
    sessionStorage.result = "lose";
  }
  else if ((sessionStorage.playerChoice == "paper") && (sessionStorage.opponentChoice == "scissors")){
    sessionStorage.result = "lose";
  }
  else if ((sessionStorage.playerChoice == "paper") && (sessionStorage.opponentChoice == "rock")){
    sessionStorage.result = "win";
  }
  else if ((sessionStorage.playerChoice == "rock") && (sessionStorage.opponentChoice == "scissors")){
    sessionStorage.result = "win";
  }
  else if ((sessionStorage.playerChoice == "scissors") && (sessionStorage.opponentChoice == "paper")){
    sessionStorage.result = "win";
  }
  
  if (sessionStorage.playerChoice == sessionStorage.opponentChoice) {
    sessionStorage.result = "tie";
  }

  if (sessionStorage.result == "win") {
    document.getElementById('result').innerHTML="you win";
    localStorage.wins++;
    document.getElementById("winNumber").innerHTML = localStorage.wins;
  }
  else if (sessionStorage.result == "lose") {
    document.getElementById('result').innerHTML="you lose";
    localStorage.losses++;
    document.getElementById("loseNumber").innerHTML = localStorage.losses;
  }
  else if (sessionStorage.result == "tie") {
    document.getElementById('result').innerHTML="you tie";
    localStorage.ties++;
    document.getElementById("tieNumber").innerHTML = localStorage.ties;
  }

}
