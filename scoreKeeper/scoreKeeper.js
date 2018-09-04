//Use the DOM to gather variables to manipulate from HTML file
var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var p1disp = document.querySelector("#p1disp");
var p1score = 0;
var p2disp = document.querySelector("#p2disp");
var p2score = 0;
var gameOver = false;
var winningScore = 5;
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var p = document.querySelector("#playTo");

//Update Player one score
p1button.addEventListener("click", function(){
	if(!gameOver){
		p1score++;
		if(p1score === winningScore) {
			p1disp.classList.add("winner");
			gameOver = true;
		}
		p1disp.textContent = p1score;
	}
});

//Update Player two score
p2button.addEventListener("click", function(){
	if(!gameOver){
		p2score++;
		if(p2score === winningScore) {
			p2disp.classList.add("winner");
			gameOver = true;
		}
		p2disp.textContent = p2score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
})

//Changes the winning score
numInput.addEventListener("change", function(){
	p.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
})

//Reset everything
function reset(){
	p1score = 0;
	p1disp.textContent = p1score;
	p1disp.classList.remove("winner");
	p2score = 0;
	p2disp.textContent = p2score;
	p2disp.classList.remove("winner");
	gameOver = false;
}