//create secret number
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));
alert(guess)

//check guess
if(guess === secretNumber) {
	alert("You got it correct!")
} else {
	alert("Nice try, but no")
}