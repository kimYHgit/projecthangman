//단어라이브러리 배열 생성
let words = [        
  "wisdom", 'journey','freedom','passion','harmony',
  'success','fortune','vibrant','compass','thrive','serene',
  'enchant','unity','courage','inspire','balance',
  'delight',"happy","sad",
  "smile","notebook"
];

let answer = '';
let maxWrong = 10; //최대 틀릴수있는 횟수 
let mistakes = 0;
let guessed = [];
let wordStatus = null;


//랜덤으로 단어를 추출한다.
function randomWord() {
  answer = words[Math.floor(Math.random() * words.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = '도라에몽 살리기 완료!!!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = '아쉽지만 정답은 : ' + answer;
    document.getElementById('keyboard').innerHTML = '아아....도라에몽은 갔습니다...';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();
