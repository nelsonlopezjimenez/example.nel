//-----------------------------GLOBALS FOR GAME STATE-----------------------
//Our "hangman" if it's dead.
var deadPerson = ";)-|-<";

//Our current person (to be hanged).
var currentPerson = "";

//The word to be guessed.
var word = "";

//Word to display to the user.
var hiddenWord = "";

//Number status indicating playing (-1), win (1), or loss (0).
var gameStatus=-1;

//------------------------FUNCTIONS---------------------------

//VOID: Sets the word variable to be guessed and the hiddenWord variable to display to the user.
//The hiddenWord variable will be populated with tiles ("_") matching the length of the input word.
function setWords(wordToSet){
	// Make word lower case.
	word=wordToSet.toLowerCase();

	// Add the same number of blanks to the hidden word as number of characters 
	// contained in the chosen word.
	for(var i=0;i<word.length;i++){
		hiddenWord+="_";
	}
}

//VOID: Makes a guess with a SINGLE LETTER and updates the currentPerson, hiddenWord, and gameStatus variables. 
//If the guess is incorrect, the currentPerson variable will have a body part added to it.
//If the guess is correct, the hiddenWord variable will have a blank replaced with a letter. 
//Updates gameStatus variable with -1 for game in progress, 0 for loss and 1 for win.
function makeGuess(guess){
	//Make lower case.
	guess=guess.toLowerCase();

	//Create variable to track whether this guess is correct.
	var guessCorrect=false;

	//Loop through the word and see if any of its letters match the guess.
	for(var i=0;i<word.length;i++){

		//Check to see if this string index matches the guess. 
		if(word[i]==guess){
			//Replace blanks in hidden word with matching letters from word.
			hiddenWord = hiddenWord.slice(0,i)+word[i]+hiddenWord.slice(i+1);

			//Set guess correct to true if we didn't already.
			if(guessCorrect==false){
				guessCorrect=true;
			}
		}
	}

	//If our guess was not correct, add another dead appendage to our living person. 
	if(!guessCorrect){
		//Add the body part from the dead person using the string index of the current person's length.
		currentPerson+=deadPerson[currentPerson.length];
	}

	//Update game status.
	if(currentPerson==deadPerson){
		//We lost.
		gameStatus= 0;
	}
	else if(word==hiddenWord){
		//We won.
		gameStatus=1;
	}
	else
	{
		//Still playing.
		gameStatus=-1;
	}
}