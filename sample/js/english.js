// const words = ["HAPPY","SAD","NOTEBOOK","EAR","EYE","WALLET"];

// //class GenerateWords
// //{
// //	consturctor(minGuess,maxGuess)
// //	{
// //		this.minGuess = minGuess;
// //		this.maxGuess = maxGuess;
// //	}
// //
// //	makeWord() {
// //		while(1)
// //		{
// //			let word = words[Math.floor(Math.random() * 6)];
// //			if(word.length >= this.minGuess && word.length <= this.maxGuess)
// //				return word;
// //		}
// //	}
// //}

// //let minGuess = 1;
// //let maxGuess = 10;
// //const word1 = new GenerateWords(minGuess,maxGuess);
// //const word = word1.makeWord();
// let word;
// let maxWrong = 10;
// let mistakes = 0;
// let guessed = [];
// let wordStatus = null;

// function randomWord() {
//   word = words[Math.floor(Math.random() * 6)];
// }


// function generateButtons() {
//   let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
//     `
//       <button
//         class="btn btn-lg btn-primary m-2"
//         id='` + letter + `'
//         onClick="handleGuess('` + letter + `')"
//       >
//         ` + letter + `
//       </button>
//     `).join('');

//   document.getElementById('keyboard').innerHTML = buttonsHTML;
// }

// function handleGuess(chosenLetter) {
//   guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
//   document.getElementById(chosenLetter).setAttribute('disabled', true);

//   if (answer.indexOf(chosenLetter) >= 0) {
//     guessedWord();
//     checkIfGameWon();
//   } else if (answer.indexOf(chosenLetter) === -1) {
//     mistakes++;
//     updateMistakes();
//     checkIfGameLost();
//     updateHangmanPicture();
//   }
// }

// function updateHangmanPicture() {
//   document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
// }

// function checkIfGameWon() {
// 	if(wordStatus === answer) {
// 		    document.getElementById('keyboard').innerHTML = 'You Won!!!';
//   }
// }
// function updateHangmanPicture() {
//   document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
// }

// function guessedWord() {
//   wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

//   document.getElementById('wordSpotlight').innerHTML = wordStatus;
// }

// function updateMistakes() {
//   document.getElementById('mistakes').innerHTML = mistakes;
// }

// function reset() {
//   mistakes = 0;
//   guessed = [];
//   document.getElementById('hangmanPic').src = './images/0.jpg';

//   randomWord();
//   guessedWord();
//   updateMistakes();
//   generateButtons();
// }

// document.getElementById('maxWrong').innerHTML = maxWrong;

// randomWord();
// generateButtons();
// guessedWord();
// //for(let i = 0; i < word.length; i++)
// //{
// //	output[i] = '_';
// //	process.stdout.write(output[i]);
// // //}
// // let mistakes = 1;
// // let count = 10;
// // let flag;
// // while(count > 0)
// // {
// // 	flag = 0;
// // 	console.log('');
// // 	console.log(`남은 횟수는 ${count}회 입니다.`);
// // 	let input = 'A';
// // 	for(let i = 0 ; i < word.length; i++)
// // 	{
// // 		if(input === word[i])
// // 			output[i] = word[i];
// // 		process.stdout.write(output[i]);
// // 	}
// // 	for(let i = 0; i < word.length; i++)
// // 		if(output[i] === '_')
// // 		{
// // 			flag = 1;
// // 			break;
// // 		}
// // 	if(flag === 0)
// // 		break;
// // 	count--;
// // 	mistakes++;
// // }
// // console.log('');
// // if(flag === 0)
// // 	alert('성공');
// // else
// // {
// // 	alert('실패');
// // 	console.log(`정답은 ${word}입니다`);
// // }

// var programming_languages = [
// 	"python",
// 	"javascript",
// 	"mongodb",
// 	"json",
// 	"java",
// 	"html",
// 	"css",
// 	"c",
// 	"csharp",
// 	"golang",
// 	"kotlin",
// 	"php",
// 	"sql",
// 	"ruby"
// ]


var words = [
  "happy","sad","smile","notebook"
];

let answer = '';
let maxWrong = 10;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

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
    document.getElementById('keyboard').innerHTML = '승리!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = '답은: ' + answer;
    document.getElementById('keyboard').innerHTML = '패배!';
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