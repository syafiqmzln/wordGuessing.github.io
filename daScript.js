
const wordToGuess = "potato";

const wordState = [];

let guessesLeft = 9;

const prevGuesses = [];

function displayWordState(state){
	let output = '';

	for(let i = 0; i < state.length; i++){
		const char = state[i];
		if(char != undefined){
			output = output + char;
			output = output + ' ';
	}
	const wordStateContainer = document.getElementById('word');
	wordStateContainer.innerHTML = output;
}
}

function displayGuessesLeft(num){
	document.getElementById('guesses-left').innerHTML = num;
}

function displayPreviousGuesses(guessessArray){

	const list = document.getElementById('past-guesses');

	list.innerHTML = '';

	for(let i = 0; i < guessessArray.length; i++){

		const guess = document.createElement('li');
		guess.innerHTML = guessessArray[i];
		list.appendChild(guess);
	}
}

function guess(wordToGuess, wordState, currGuess){
	for(let i = 0; i < wordToGuess.length; i++){
		if(wordToGuess[i] == currGuess){
			wordState[i] = currGuess;
		}
	}
	displayWordState(wordState);
}

function checkWon(wordState){
	let hasBlanks = false;
	for(let i = 0; i < wordState.length; i++){
		if(wordState[i] == '_'){
			hasBlanks = true;
		}
	}
	return !hasBlanks
}

function setup(){

	for( let i = 0; i < wordToGuess.length; i++){
		wordState.push('_')
	}
	displayGuessesLeft(guessesLeft);
	displayWordState(wordState);
	displayPreviousGuesses(prevGuesses);
}

function setupForm(){
const form = document.getElementById('player-input');
const input = document.getElementById('player-guess');

// function validateInput(guess, prevGuesses){
// 	if(guess.length == 1 && prevGuesses.indexOf(guess !=-1)
// 			return true;
// 	}
// 	return false



	
form.onsubmit = function(event){
	event.preventDefault();
	const currentInput = input.value
	input.value = '';

	prevGuesses.push(currentInput);

	guessesLeft = guessesLeft - 1;
	displayGuessesLeft(guessesLeft);

	//WON
	const won = checkWon(wordState)
	if(won){
	window.alert('You won!')
	}	

	//LOST
	else if(guessesLeft == 0){
		window.alert('You suck!');
	}

	guess(wordToGuess, wordState, currentInput);
	displayPreviousGuesses(prevGuesses)
}
}

setup();
setupForm();
