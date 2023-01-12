const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInput = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingGuesses = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

const placeholder = function (word) {
    const placeholderBlanks = [];
    for (const letter of word) {
        console.log(letter);
        placeholderBlanks.push("●");
    }
    wordProgress.innerText = placeholderBlanks.join("");
};

placeholder(word);

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const letterGuessed = guessInput.value;
    console.log(letterGuessed);
    guessInput.value = "";
});

const guessValidation = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        // If a player guesses a blank input
        message.innerText = "Please enter a letter";
    } else if (input.length > 1) {
        // If a player guesses more than one letter
        message.innerText = "Please enter one letter at a time";
    } else if (!input.match(acceptedLetter)) {
        // If a player guesses a character or number
        message.innerText = "Please enter a letter from A to Z";   
    } else {
        return input;
    }
};