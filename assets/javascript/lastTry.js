var words = ["beagle", "weimaraner", "chihuahua", "rottweiler", "whippet", "bulldog", "dobermann"];
var wordChoice;
var numGuesses;
var userGuess;
var correct;
var incorrect;
var i;
var wins = 0;
var losses = 0;

var currentWord = document.getElementById("currentWord");
var remGuesses = document.getElementById("remGuesses");
var lettersGuessed = document.getElementById("guessedSoFar");
var winCount = document.getElementById("winCount");
var lossCount = document.getElementById("lossCount");
var doggy = document.getElementById("dogInfo");
var anyKey = document.getElementById("pressAnyKey");

winCount.innerHTML = wins;
lossCount.innerHTML = losses;


function gameStart() {

  wordChoice = words[Math.floor(Math.random() * words.length)];
  numGuesses = 12;
  incorrect = [];
  correct = [];

  lettersGuessed.innerHTML = incorrect.join(", ");
  anyKey.innerHTML = "";

  // Print underscores for length of wordChoice
  for (i = 0; i < wordChoice.length; i++) {
    correct.push("_");
  }
  currentWord.innerHTML = correct.join(" ");
  remGuesses.innerHTML = numGuesses;

}

// Update remaining guess count and populate and display correct/incorrect arrays
function updateGuesses(guess) {

  numGuesses--;
  remGuesses.innerHTML = numGuesses;

  if (wordChoice.indexOf(guess) === -1) {
    incorrect.push(guess.toUpperCase());
    lettersGuessed.innerHTML = incorrect.join(", ");
  }
  else {
    for (var i = 0; i < wordChoice.length; i++) {
      if (wordChoice[i] === guess) {
        correct[i] = guess.toUpperCase();
      }
    }
    currentWord.innerHTML = correct.join(" ");
  }

}

// Check game status for win/loss, increment, display, alert, and restart game
function gameCheck() {

  if (correct.indexOf("_") === -1) {
    alert("You do it! You found " + wordChoice.toUpperCase() + ". Press ANY key to play again.");
    wins++;
    winCount.innerHTML = wins;

    if (wordChoice === words[0]) {
        doggy.innerHTML = "<h3>Beagle</h3><img src='assets/images/beagle.jpg' /></br></br>The Beagle is a breed of small hound that is similar in appearance to the much larger foxhound. The beagle is a scent hound, developed primarily for hunting hare.";
        doggy.style.border = "1px solid #888888";
        
    }

    if (wordChoice === words[1]) {
        doggy.innerHTML = "<h3>Weimaraner</h3><img src='assets/images/weimaraner.jpg' /></br></br>The Weimaraner is a large dog that was originally bred for hunting in the early 19th century. Early Weimaraners were used by royalty for hunting large game such as boar, bear and deer.";
        doggy.style.border = "1px solid #888888";
    }

    if (wordChoice === words[2]) {
        doggy.innerHTML = "<h3>Chihuahua</h3><img src='assets/images/chihuahua.jpg' /></br></br>The Chihuahua is the smallest breed of dog and is named after the state of Chihuahua in Mexico. Chihuahuas come in a wide variety of colors, and two coat lengths.";
        dogInfo.style.border = "1px solid #888888";
    }

    if (wordChoice === words[3]) {
        doggy.innerHTML = "<h3>Rottweiler</h3><img src='assets/images/rottweiler.jpg' /></br></br>The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large. The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers' dogs, because their main use was to herd livestock and pull carts laden with butchered meat to market.";
        doggy.style.border = "1px solid #888888";
    }

    if (wordChoice === words[4]) {
        doggy.innerHTML = "<h3>Whippet</h3><img src='assets/images/whippet.jpg' /></br></br>The Whippet is a dog breed of medium-size. They are a sighthound breed that originated in England, where they descended from greyhounds. Whippets today still strongly resemble a smaller greyhound. Shown in the Hound group, Whippets have relatively few health problems other than arrhythmia.";
        doggy.style.border = "1px solid #888888";
    }

    if (wordChoice === words[5]) {
        doggy.innerHTML = "<h3>Bulldog</h3><img src='assets/images/bulldog.jpg' /></br></br>The Bulldog, also known as the British Bulldog or English Bulldog, is a medium-sized breed of dog. It is a muscular, hefty dog with a wrinkled face and a distinctive pushed-in nose. The American Kennel Club, The Kennel Club, and the United Kennel Club oversee breeding records.";
        doggy.style.border = "1px solid #888888";
    }

    if (wordChoice === words[6]) {
        doggy.innerHTML = "<h3>Dobermann</h3><img src='assets/images/dobermann.jpg' /></br></br>The Dobermann, or Doberman Pinscher in the United States and Canada, is a medium-large breed of domestic dog that was originally developed around 1890 by Karl Friedrich Louis Dobermann, a tax collector from Germany. The Dobermann has a long muzzle. It stands on its pads and is not usually heavy-footed.";
        doggy.style.border = "1px solid #888888";
    }
    
    gameStart();
  }
  else if (numGuesses === 0) {
    alert("Game over! The answer was " + wordChoice.toUpperCase() + ". Press ANY key to play again.");
    losses++;
    lossCount.innerHTML = losses;
    gameStart();
  }

}

// User input between a-z, update display after entry and check game for win/loss
document.onkeyup = function(event) {
  
  userGuess = event.keyCode;

  if (userGuess >= 65 && userGuess <= 90) {
        userGuess = event.key;
        userGuess = userGuess.toLowerCase();
        updateGuesses(userGuess);
        gameCheck();
    }
}

alert("Press ANY key to play.");
gameStart();