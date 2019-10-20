  "use strict"



//instantiation of variables
let userScore = 0;
let computerScore = 0;
let mode = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div =document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_div = document.getElementById("reset");
const play_div = document.getElementById("play");
const mode_div = document.getElementById("mode");
const player1_label = document.getElementById("user-label");    //labe element for player1 name 
const player2_label = document.getElementById("computer-label");//labe element for player2 name 

play_div.style.display = "none";
let player1_name = "You";
let player2_name = "comp";

player1_label.innerHTML = player1_name;
player2_label.innerHTML = player2_name;
// to get computer choice
function getComputerChoice(){
    const choices =['r','p','s'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];

}
//converting letters to words
function convertToWord(letter) {
    if (letter=== "r") return "Rock";
    if (letter==="p") return "Paper";
    return "Scissors";
}

// if its a win
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = player1_name.fontsize(3).sub();
    const smallComputerWord = player2_name.fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats 
    ${convertToWord(computerChoice)}${smallComputerWord} . ${player1_name} win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},300);

}

function lose(userChoice, computerChoice) {

   computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = player1_name.fontsize(3).sub();
    const smallComputerWord = player2_name.fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} lose to
    ${convertToWord(computerChoice)}${smallComputerWord} . ${player2_name} win!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},300);

}

function draw(userChoice, computerChoice) {
    const smallUserWord = player1_name.fontsize(3).sub();
    const smallComputerWord = player2_name.fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals
    ${convertToWord(computerChoice)}${smallComputerWord} . Its a draw!`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},300);

}



// comparing choices, 
function game(userChoice){
   const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice){
       case "rs":
       case "pr":   
       case "sp":
           win(userChoice, computerChoice);
           break;
        case "rp":  
        case "sp":
        case "sr":    
        lose(userChoice, computerChoice);
           break; 
        case "rr":
        case "rp":    
        case "ss":
        draw(userChoice, computerChoice);
         break;
   }

}

//fuction to reset game process
function reset(){
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = 'Game Reseted';
}

//function to change game mode
function change_mode(){
  mode = (mode + 1) % 2;
  if(mode == 0){  //human vs computer
    rock_div.style.display = "inline-block";
    paper_div.style.display = "inline-block";
    scissors_div.style.display = "inline-block";
    play_div.style.display = "none";
    player1_name = "You";
    player2_name = "Comp"
  }else{            //computer vs computer
    rock_div.style.display = "none";
    paper_div.style.display = "none";
    scissors_div.style.display = "none";
    play_div.style.display = "inline-block";
    player1_name = "Comp1";
    player2_name = "Comp2";
  }
  reset();
  player1_label.innerHTML = player1_name;
  player2_label.innerHTML = player2_name;
}

function play(){
  let userChoice = getComputerChoice();
  game(userChoice);
}

//events listener
function main(){
rock_div.addEventListener('click', function(){
    game ("r")
})
paper_div.addEventListener('click', function(){
    game("p")
})
scissors_div.addEventListener('click', function(){
    game("s")
})
  reset_div.addEventListener('click', function(){
    reset();
  })

  mode_div.addEventListener('click', function(){
    change_mode();
  })

  play_div.addEventListener('click', function(){
    play();
  })
}
main();
