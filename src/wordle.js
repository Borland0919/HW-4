//references to DocumentObjectModel (DOM) elements
const guessInputElement = document.querySelector(".guess-input");
const guessLettersElement = document.querySelector(".guess-letters");
let lettersDivs;
const trialsElement = document.querySelector(".trials-remained");
const gameResultElement = document.querySelector(".game-result");
const playAgainElement = document.querySelector(".play-again");

//varibales required for JS Logic
const wordsForGuess = ["pappy", "apple", "table", "gold", "silver", "index", "script", "peace", "picture"];
let trials;
let word;
let flagGameOver = false;

//functions
function startGame() {
   word = getWord();
   filllettersDivs();
   trials = word.length + 1; 
   playAgainElement.style.display = "none";
   gameResultElement.innerHTML = "";
   trialsElement.innerHTML = `Remained trials = ${trials}`;
}

function getWord(){
    const index = Math.trunc(Math.random() * wordsForGuess.length);
    return wordsForGuess[index];
}

function filllettersDivs(){
   const arrayWord = Array.from(word);
   guessLettersElement.innerHTML = arrayWord.reduce(function(res,cur){
      res = res + '<div class="letter"></div>';
      return res;
   },'');
   lettersDivs = document.querySelectorAll(".letter");
}

function onChange() {
  if(flagGameOver){
    alert("Game is Over, press 'Play Again'")
   } 
  else {
    const trialWord = guessInputElement.value;
    trials--;
    trialsElement.innerHTML = `Remained trials = ${trials}`;
    if(trialWord.length != word.length){
        alert("Wrong number of letters");
    }
    else{
    coloringWord(trialWord); //foreach
    let control =1 ;
    if (trialWord == word){
        finishGame(control)
    };
    if (trials === 0){
        finishGame(0)
    };
    }}
 } 

function coloringWord(trialWord){
    const arWord = Array.from(trialWord);
    arWord.forEach(function(letter,index){
        lettersDivs[index].innerHTML = letter;
        lettersDivs[index].style.color = getColor(letter,index);
    })
}

function getColor(letter,index){
    let res = "red"
  if(word.includes(letter)){
    res = word[index] == letter ? "green" : "yellow";
  }
  return res;
}

function finishGame(controlNumber) {
if (controlNumber==1) {
    gameResultElement.innerHTML =  "You are winner"
    flagGameOver = true;
    playAgainElement.style.display='block';
    trialsElement.innerHTML = 'You guessed the word';
        } 
else if (controlNumber == 0) {
    gameResultElement.innerHTML =  "You are loser";
    flagGameOver = true;
    playAgainElement.style.display='block';
    trialsElement.innerHTML = 'You do not guessed the word';
    }
}

//actions
startGame();