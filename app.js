//give two variabe user score or comp choice
let userScore = 0;
let compScore = 0;


//select html in js by id or class 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = ()=>{
const options = ["rock","paper","scissor"];
const  randIdx= Math.floor(Math.random()*3);
return options[randIdx];
};
 //function for draw game
const drawGame = () =>{
console.log("draw");
msg.innerText = "game was draw . play again/";
msg.style.backgroundColor = "blue";
};

//function for winning if user win then user score increase other wise computer score win
const showWinner = (userWin) =>{
if(userWin){
   userScore++;
   userScorepara.innerText=userScore;
console.log("you won");
msg.innerText = "you won";
msg.style.backgroundColor = "green";

}else{
         compScore++;
   compScorepara.innerText=compScore;
   console.log("you lose");
   msg.innerText = "you loose";
   msg.style.backgroundColor = "red";
}
};
//logic of the game
const playGame = (userChoice)=>{
console.log("choice was clicked",userChoice);
const compChoice = genCompChoice();
console.log("comp Choice", compChoice);

if(userChoice===compChoice){
   //draw game
   drawGame();
}else{
  let userWin = true;
  if(userChoice==="rock"){
   //scissor,paper
   userWin = compChoice === "paper"? false:true;
  }else if(userChoice==="paper") {
   // rock,scissor
   userWin = compChoice === "scissor"? false:true;
  }else  {
   // rock,paper
   userWin = compChoice === "rock" ? false:true;
  }
  showWinner (userWin);
}
};

//when click on our choice print id of choice and return playgame
choices.forEach((choice) =>{
   choice.addEventListener("click", ()=>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
   });
});