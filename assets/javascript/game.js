var words = ["artic", "north", "atlantic", "pacific", "south", "indian", "oceans"]
var word = words[Math.floor(Math.random() * words.length)];
var rightWords = [];
var wrongWords = [];
var underScore = [];
var guessesLeft = 15;


var docUnderScore = document.getElementById("underscore");
console.log("this is the underscore object");
var docRightGuess = document.getElementById("rightGuess");
console.log("this is the rightGuess object");
var docWrongGuess = document.getElementById("wrongGuess");
console.log("this is the wrongGuess object");
var remainingCount = document.getElementById("remainingCount");
remainingCount.textContent = guessesLeft

function generateUnderscore() {
    for (var i = 0; i < word.length; i++) {
        underScore.push("_ ");
    }
}

console.log(underScore)
generateUnderscore()

docUnderScore.textContent = underScore.join(' ')
console.log(word);

function reset() {
    word = words[Math.floor(Math.random() * words.length)];
    wrongWords = [];
    underScore = [];
    rightWords = [];
    generateUnderscore()
    docUnderScore.textContent = underScore.join(' ')
    guessesLeft = 15
}
// Generates underscore

document.onkeyup = function (event){
    var keycode = event.keyCode;
    var letter = event.key
    console.log(word.indexOf(letter));


    // docUnderScore.textContent = "";
    if (event.which >= 65 && event.which <= 90) {

    // if index of button pressed is contained inside the word because its value is greater than -1, it is there.
    if (word.indexOf(letter) > -1) {
        rightWords.push(letter);
        docRightGuess.textContent = rightWords.join(' ')
    // Pushes correct letter into right word array.

        for (var i = 0; i < word.length; i++) {
            if (letter === word[i]) {
                console.log("condition hit")
                underScore[i] = letter
                console.log(underScore)
                docUnderScore.textContent = underScore.join(' ')
            }
        }



    } else {
        // decrement guesses
        guessesLeft--
        console.log(guessesLeft)
        remainingCount.textContent = guessesLeft
        // displaye guesses to page
        wrongWords.push(letter);
        console.log(wrongWords);
        docWrongGuess.textContent = wrongWords.join(' ')
    }
   
} else {
    alert("You didn't pick a letter")
}

    if (!underScore.includes("_ ")) {
        alert("You won")
        // reset game
        reset()
    }

    if (guessesLeft === 0) {
        alert("you lost")
        // reset game
        reset()
    }




};