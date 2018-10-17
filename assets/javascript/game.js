var wins = 0;
var losses = 0;
var guess = 9;
var wrongGuesses = "";
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
    "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "x", "y", "z"];



var userWins = document.getElementById('wins');
var userLosses = document.getElementById('losses');
var remainingGuesses = document.getElementById('left');
var wrongGuesses = document.getElementById('lettersGuessed');


var randLetter = function (){
   choices[MathFloor(Math.random() * (choices.length)-1)];
}

document.onkeyup = function (event) {
    for (var i = 0; i <choices.length-1; i++){
        var userGuess = event.key;
    if (userGuess !== randLetter){
        wrongGuesses.appendChild(userGuess);
        userLosses++;
        // not sure  
        //document.write(userLosses); 
        remainingGuesses--;
        remainingGuesses.textContent(remainingGuesses);       
    }else (userGuess === randLetter){
        userWins++;
       // not sure on this
       // document.write(userWins);
    }
}
};
    




