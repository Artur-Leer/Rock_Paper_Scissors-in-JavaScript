function getComputerChoice (){
    const CHOICES = ["ROCK","PAPER","SCISSORS"]
    let index = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[index];
}






