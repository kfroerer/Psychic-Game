var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
    "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guess = 9;
var randLetter = function (){
    return choices[Math.floor(Math.random() * (choices.length -1))];
}
var ourGuess = randLetter();

var node  = document.createElement("P");

document.onkeyup = function (event) {
   
    for (var i = 0; i < choices.length; i++){
        var userGuess = event.key;  }  

    if (userGuess !== ourGuess){
        guess--;
        document.getElementById("left").textContent = "Remaining Guesses: " + guess;
        var wrongGuesses = document.createTextNode(userGuess)
        node.appendChild(wrongGuesses);
        document.getElementById("lettersGuessed").appendChild(node);
    } //not working correctly
    else if (guess <= 1) {
        alert("You lose!");
        losses++;
        document.getElementById("losses").textContent = "Losses: " + losses;
        ourGuess = randLetter();
        guess = 9;
        document.getElementById("left").textContent = "Remaining Guesses: " + guess;
        node.parentNode.removeChild(wrongGuesses);

        //not working....
       // document.getElementById("lettesGuessed").textContent = "";

    }else {
        wins++;
        document.getElementById("wins").textContent = "Wins: " + wins;
        ourGuess = randLetter();
        guess = 9;
        document.getElementById("left").textContent = "Remaining Guesses: " + guess;
        node.parentNode.removeChild(wrongGuesses);

//not working
       // document.getElementById("lettesGuessed").textContent = "Letters Guessed: ";
    }
    
    }