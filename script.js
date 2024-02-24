function getComputerChoice (){
    const CHOICES = ["ROCK","PAPER","SCISSORS"]
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






