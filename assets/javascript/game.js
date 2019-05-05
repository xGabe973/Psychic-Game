
var computerChoices = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var guessLetter = []
var wins = 0;
var losses = 0;
var guessLeft = 9;
var userChoiceText = " ";
var stringedArray = "";
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guessLeft-text");
var userChoiceText = document.getElementById("userChoice-text");
var computerGuess = ""

document.onkeyup = function (event) {
    console.log(event)
    var userGuess = event.key.toLowerCase();
    if (guessLetter.includes(userGuess)) {
        alert("You've already guessed this");
        return;
    }
    if (!computerChoices.includes(userGuess)) {
        alert("please use letters only");
        return;
    }
    if (userGuess === computerGuess) {
        wins++;
        endGame();
    }
    else {
        guessLeft--;
        if (guessLeft === 0) {
            losses++;
            endGame();
        }
        guessLetter.push(userGuess);
        stringedArray = guessLetter[0];
        for (let i = 1; i < guessLetter.length; i++) {
            stringedArray = stringedArray + ", " + guessLetter[i];
        }
        console.log(stringedArray);
    }
    console.log(wins)
    winsText.innerHTML = "Wins: " + wins;
    lossesText.innerHTML = "Losses: " + losses;
    guessLeftText.innerHTML = "Guesses left: " + guessLeft;
    userChoiceText.innerHTML = "What you've tried so far: " + stringedArray;
    // make a function to check if there are any guesses left. and does something when guesses Left = 0
}
endGame = function () {
    guessLeft = 9;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessLetter = [];
}
endGame();