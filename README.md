<!DOCTYPE html>
<html>
<head>
	<title>GG: Guessing Game</title>
</head>
<body>
	<h1>GUESS THE WORD</h1>

	<h2>Word State</h2>
	<!--Potato-->
	<p id='word'></p>

	<h2>Guessed Alphabets</h2>
	
	<ul id="past-guesses">

	</ul>

	<h2>Number of Guesses</h2>  
	<p>You have <span id="guesses-left"></span> guesses left</p>
	
	<form id="player-input">
		<input id="player-guess" type="text"/>
		<input type="submit"/>
	</form>

	<script src="daScript.js"></script>

</body>

</html>
