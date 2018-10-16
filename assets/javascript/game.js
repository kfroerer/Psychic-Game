var wins = 0;
var losses = 0;
var guess = 9;
var lettersGuessed = "";
var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'x', 'y', 'z']



var userWins = document.getElementById('wins');
var userLosses = document.getElementById('losses');
var remainingGuesses = document.getElementById('left');
var wrongGuesses = document.getElementById('lettersGuessed');


document.onkeyup = function (event) {
    var userGuess = event.key;
    wrongGuesses.textContent(userGuess);
    //do if, then statements
}

//function userGuess () {
   // var x = document.getElementById('lettersGuessed');


}

