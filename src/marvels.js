//References to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");

//Global Variables
const questionsWords = [
    ["Знаменитый анлглийский крепкий алкогольный напиток на можжевельнике это...?", "джин"],
    [" Единственное ядовитое млекопитающее в мире это...?", "утконос"],  
    ["Так в старину называли сторожа городских ворот?","вратарь"],
    ["Анисовая настойка или ликер-это?","абсент"],
    ["Что запрещалось носить в Царско Сельском лицее?","очки"],
    ["Склонный к употреблению одних и тех же фраз чаще, чем хотелось бы это...?","попугай"],
    ["Именно он ждал перемен сажая алюминивые огурцы","цой"],
    ["Предмет гигиены. В мифологии он являлся символом женственности","расческа"],
    ["По мнению Древних Ирландцев это должно было присутствовать в изобилии в раю. Это?","свинина"],
    ["Что нельзя сделать в космосе?","повеситься"],
    ["Ученый Дэвид Льюис из Англии, проведя исследование, выяснил, что это безопасно только для женщин, в то время как для мужчин чревато появлением серьезных болезней. В ходе эксперимента было обнаружено, что только у четверти женщин наблюдались какие-то незначительные изменения в организме, к примеру, учащенное сердцебиение. Мужчины же воспринимали это крайне негативно (учащение пульса, аритмия, высокое артериальное давление). Это пришло в русский язык из английского относительно недавно и так и закрепилось. Назовите это","шопинг"]];    
let currentIndex = 0;
let answer = "";
let trialsOfLetters;

//functions
function startGame(){
  wordInputElement.value = '';
  wordInputElement.readOnly = true;
  letterInputElement.readOnly = false;
  questionElement.innerHTML = questionsWords[currentIndex][0];
  answer = questionsWords[currentIndex][1];
  playAgain.style.display = 'none';
  resultMessage.innerHTML = '';
  wordElement.innerHTML = getWordDivs();
  trialsOfLetters = trials();
  remainedLettersElement.innerHTML = `Вы можете открыть "${trialsOfLetters}" буквы`;
}

function getWordDivs() {
  let word = answer;
  let wordDivs = '';
  for (let i = 0; i < word.length; i++) {
    wordDivs += `<div class="word-letter" id="${i}">${word[i]}</div>`;
  }
  return wordDivs;
};

function checkWord(){
  let word = wordInputElement.value;
  if(word === answer){
     finishGame(1);
  }
  else{
    finishGame(0);
  }
  let arAnswer = Array.from(answer);
  arAnswer.map(function(element,index){
    document.getElementById(index).style.background = "white";
  });
}
function processLetter(){
  let arAnswer = Array.from(answer);
  let guessLetter = letterInputElement.value;
  arAnswer.map(function(element,index){
    if(element === guessLetter){
      document.getElementById(index).style.background = "white";
    }
  })
  trialsOfLetters--;
  remainedLettersElement.innerHTML = `Вы можете открыть "${trialsOfLetters}" букву`; 
  if(trialsOfLetters == 0){
    wordInputElement.readOnly = false;
    letterInputElement.readOnly = true;
    remainedLettersElement.innerHTML = "А теперь угадайте слово!";
  }
}

function trials(){
    let numberOfTrails = 0;
    numberOfTrails = Math.round(answer.length*0.3);
    return numberOfTrails;
}

function takeChance(){
    wordInputElement.readOnly = false;
    letterInputElement.readOnly = true;
}
function finishGame(number){
  let controlNumber = number;
  if(controlNumber){
    resultMessage.innerHTML = "Это правильный ответ! Вы победили!";
    playAgain.style.display = "block";
  }
  else{
    resultMessage.innerHTML = "Это неправильный ответ,вы проиграли";
    playAgain.style.display = "block";
  }
  currentIndex++;
}
//Actions
startGame();