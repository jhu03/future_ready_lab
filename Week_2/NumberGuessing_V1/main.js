/*eslint-env browser*/
function playGame(){ 
alert("First enter a low number, then a high number. Then, guess a random number between them.");

//get the low and high bounds
//uses parseInt() to make sure we have numbers and not strings
var from = parseInt(prompt("Enter the lower bound between 0 and 1000."));
    
    while (isNaN(from)){ 
        from  = parseInt(prompt("Enter a number as the lower bound between 0 and 1000.")); 
    }
    
    
//prompts user to enter a new bound if number is not within range
    while (from > 1000 || from < 0){
        from = parseInt(prompt("Your lower bound is not within the 0 to 1000 range. Enter a new lower bound."));
        }
    

    
var to = parseInt(prompt("Enter the higher bound between 0 and 1000."));
    
    while (isNaN(to)){ 
        to  = parseInt(prompt("Enter a number as the higher bound between 0 and 1000.")); 
    }
    
//prompts user to enter a new bound if number is not within range
    while (to > 1000 || to < 0){
        to = parseInt(prompt("Your higher bound is not within the 0 to 1000 range. Enter a new higher bound."));
        }
    
    
//loops lower bound until user enters a lower bound that is lower than higher bound
    while (from > to) {
       from = parseInt(prompt("Your lower bound is too high. Enter a new lower bound."));
    }

//get an integer between [from, to]
//Math.random() returns decimals, used Math.round to get whole number
var target = Math.round(Math.random() * (to - from) + from);

var currentGuess = parseInt(prompt("Guess a number between " + from + " and " + to));
    while (isNaN(currentGuess)){ 
    currentGuess  = parseInt(prompt("Enter a number as a guess.")); 
    }
    
//loops if guess is outside range
    while (currentGuess > to || currentGuess < from) {
       currentGuess = parseInt(prompt("Your guess is not within the number range. Guess a number between " + from + " and "  + to));
    }
    

var totalGuesses = 1;

//loop until user guesses correct number
while(currentGuess != target){
       if (currentGuess < target){
        currentGuess = parseInt(prompt("Enter a higher number"));

        totalGuesses++;
    }else if (currentGuess > target){
        currentGuess = parseInt(prompt("Enter a lower number"));
        
        totalGuesses ++;
    }else if(currentGuess > to || currentGuess < from) {
       currentGuess = parseInt(prompt("Your guess is not within the number range. Guess a number between " + from + " and "  + to));
        
        totalGuesses ++;
    }
}
    
alert("It took " + totalGuesses + " tries to guess the correct number.");

}