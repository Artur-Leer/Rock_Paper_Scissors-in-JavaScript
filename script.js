const CHOICES = ["ROCK","PAPER","SCISSORS"];

function getComputerChoice (){
    let index = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[index];
}

function validChoice (playerChoice,CHOICES){
    return CHOICES.includes(playerChoice);
}

function getPlayerChoice (){
    let playerChoice = (prompt('ROCK, PAPER OR SCISSORS?').toUpperCase());
    return playerChoice;
}

function playGame (){
// DEFINE COMPUTERCHOICE & PLAYERCHOICE
let rounds = 0;
while (rounds < 5) {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
// CHECK IF PLAYERCHOICE IS VALID
    if (validChoice(playerChoice, CHOICES)){

        console.log(`You chose ${playerChoice}`);
        console.log(`Computer chose ${computerChoice}`);

        if (playerChoice === computerChoice){
            console.log ('That means tie!');
        } else if ( playerChoice === "ROCK" && computerChoice === "SCISSORS" ||
                    playerChoice === "PAPER" && computerChoice === "ROCK" ||
                    playerChoice === "SCISSORS" && computerChoice === "PAPER"){
                        console.log('You win!');
                    } else {
                        console.log ('Computer wins!');
                    }}
        rounds++;
        console.log(rounds);
        

    }}
    playGame();

    







