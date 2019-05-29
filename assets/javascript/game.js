var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessChoice = [];
var winsDiv = document.getElementById("wins");
var guessesLeftDiv = document.getElementById("guessesLeft");
var lossesDiv = document.getElementById("losses");
var userGuessDiv = document.getElementById("guessesSoFar");
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log("computer guess",computerGuess);

document.onkeyup= function(event) {
    var userGuess = event.key;

    if (letters.indexOf(userGuess) > 0) {

        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
            // guessChoice = [];
            guessChoice.push(userGuess);
            alert("You WIN!");
            computerGuess = letters[Math.floor(Math.random() * letters.length)];
            console.log("computer guess",computerGuess);
        }
        if (userGuess != computerGuess){
            guessesLeft--;
            guessChoice.push(userGuess);
        }
        if (guessesLeft === 0){
            losses++;
            guessesLeft = 9;
            alert("HAHAHA YOU LOSE!")
            computerGuess = letters[Math.floor(Math.random() * letters.length)];

        }
    }

    console.log("wins",wins);
        winsDiv.innerText = wins;
        guessesLeftDiv.innerText = guessesLeft;
        lossesDiv.innerText = losses;
        userGuessDiv.textContent = guessChoice;
    console.log("guesses",guessesLeft);
    console.log("choice",guessChoice);
    console.log("losses", losses);
}