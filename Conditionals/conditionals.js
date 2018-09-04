
//Get age
var age = Number(prompt("What is your age?"));

if(age < 0) {
	console.log("You cannot exist")
}
if(age < 18) {
	console.log("Sorry, you may not enter you are too young")
}
else if(age < 21) {
	console.log("You may enter but you cannot drink")
}
else if(age===21) {
	console.log("Happy birthday! Free round")
}
else {
	console.log("Come on in!")
}