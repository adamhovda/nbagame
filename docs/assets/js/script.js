let wordBlank = document.querySelector(".word-blanks")
let startButton = document.querySelector(".start-button")
let guessesRemaining = document.querySelector("#guesses-remaining")
let correct = document.querySelector(".win")
let guessedLetters = document.querySelector(".guessed-letters")
let heroGif = document.querySelector(".hero-gif")


let chosenWord = "";
let numBlanks = 0;
let guesses = 20;
let win = 0;

var blanksLetters = [];
var lettersInChosenWord = [];
let incorrectLetters = [];


let wordOptions = ["hawks", "celtics", "nets", "cavaliers", "mavericks", "nuggets", "pistons", "warriors", "rockets", "pacers", "clippers", "lakers", "grizzlies", "heat", "bucks", "timberwolves", "pelicans", "knicks", "thunder", "magic", "suns", "blazers", "kings", "spurs", "raptors", "jazz", "wizards", "atlanta", "boston", "new jersey", "clevland", "dallas", "denver", "detroit", "golden state", "houston", "indiana", "los angeles", "memphis", "miami", "milwaukee", "minnesota", "new orleans", "new york", "oklahoma city", "orlando", "phoenix", "portland", "sacramento", "san antonio", "toronto", "utah", "washington"]


console.log(wordOptions)

function startGame() {
    renderBlanks()
    emptyGuessedLetters()
    guesses = 20
    guessesRemaining.textContent = guesses;
    win = 0;
    correct.textContent = win;
}

function renderBlanks(){
    chosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    console.log(chosenWord)
    numBlanks = chosenWord.length;
    blanksLetters = [];

    for (let i = 0; i < numBlanks; i++) {
          
        blanksLetters.push("_");

      }


    //   let blankLettersStr = blanksLetters.join(" ")
      wordBlank.textContent = blanksLetters.join(" ")
      console.log(blanksLetters)

}


// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
    var letterInWord = false;
    console.log(numBlanks)
    for (var i = 0; i < numBlanks; i++) {
      if (chosenWord[i] === letter) {
        letterInWord = true;
      }
    }
    if (letterInWord) {
      for (var j = 0; j < numBlanks; j++) {
        if (chosenWord[j] === letter) {
          blanksLetters[j] = letter;
          console.log('letter match')
        }
    }
    wordBlank.textContent = blanksLetters.join(" ").toUpperCase();
    checkWin();

        } else if (!letterInWord){
            guesses--
            guessesRemaining.textContent = guesses;
            if(guesses === 0){
              alert(`you got ${win} right`)
              startGame()
            }
            if (incorrectLetters.includes(letter)){

              return
            } else {
            incorrectLetters.push(letter)
            guessedLetters.textContent = incorrectLetters.join(" ")
          }

        }
  }

  function checkWin(){
  if (chosenWord === blanksLetters.join("")) {
        win++
        correct.textContent = win
        renderBlanks()
        emptyGuessedLetters();
  }
  }

  function emptyGuessedLetters(){
    guessedLetters.textContent = ""
    incorrectLetters = []
  }
  
  // Attach event listener to document to listen for key event
  document.addEventListener("keydown", function(event) {
    // If the count is zero, exit function
    // if (timerCount === 0) {
    //   return;
    // }
    // Convert all keys to lower case
    var key = event.key.toLowerCase();
    var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
    // Test if key pushed is letter
    if (alphabetNumericCharacters.includes(key)) {
      var letterGuessed = event.key;
      console.log(letterGuessed)
      checkLetters(letterGuessed)
    //   checkWin();
    }
  });

window.addEventListener("load", function(){
  heroGif.classList.remove("hidden");

  setTimeout(function(){
    heroGif.classList.add("hidden");
    
    // >> Set cookie to visited here <<
  }, 4500);
})

// startButton.addEventListener("click", startGame);
startGame()


