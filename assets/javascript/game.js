//create an array of words
var words = [
    "javascript",
    "hypertext",
    "cascading",
    "function",
    "variable",
    "array",
    "document",
    "script",
    "class",
    "loop",
    "stylesheet",
    "jquery",
    "scope",
    "matrix"
];

//life counter section, count down from 7.
var lifeCounter = 7
var html = "<p>" + lifeCounter + "</p>"

for (var i = 7; i > 0; i--) {
    if (lifeCounter[i] === 0) {
        document.getElementById("mess").innerHTML = "You Lose";
    } else {
        document.getElementById("lifecount").innerHTML = html;
    }
}


//wins counter section, count up to 7
var winCounter = 0
var html = "<p>" + winCounter + "</p>"

for (var j = 0; j < 7; j++) {
    if (winCounter === 7) {
        document.getElementById("mess").innerHTML = "You Win!";
    } else {
        document.getElementById("wincount").innerHTML = html;
    }
}


var userText = document.getElementById("guessed");
//listen for keys
document.onkeyup = function() {
    userText.textContent = event.key;
    var userText = document.getElementById("guess")
    //choosing random word    
    var word = words[Math.floor(Math.random() * words.length)];

    //create answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    //remaining guesses
    var remainingLetters = word.length;

    //Game Loop
    while (remainingLetters > 0) {
        //player progress
        var el = document.getElementById("mess");
        el.innerHTML = answerArray.join(" ");

        //get guess
        var guess = document.getElementById("mess").innerHTML = "Guess letter or click Cancel to quit.";
        if (guess === null) {
            //exit game
            break;
        } else if (guess.length !== 1) {
            document.getElementById("mess").innerHTML = "Please enter a single letter.";
        } else { //update game state
            for (var j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
        }
        //end of game loop
    }

    el.innerHTML = answerArray.join(" ");
    document.getElementById("footer").innerHTML = "good job the answer was " + word + ".";

};
