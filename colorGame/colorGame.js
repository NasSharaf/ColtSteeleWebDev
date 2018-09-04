var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisp = document.querySelector("#colorDisp");
var messageDisp = document.querySelector("#message");
var modeButtons = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var button = document.querySelector("button");

for(var i =0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	})
}

function reset() {
	//Generate new colors
	colors = generateRandomColors(numSquares);
	//pick new color from array
	pickedColor = pickColor();
	//change colordisp to match picked color
	colorDisp.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	//toggle message disp
	messageDisp.textContent = "";
	//change square colors
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//change everything else
	h1.style.backgroundColor = "steelblue";
}



/*easybtn.addEventListener("click", function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisp.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
})

hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisp.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
})*/

reset.addEventListener("click", function(){
	reset();
})

colorDisp.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color & compare to picked
		clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
			//If correct
			messageDisp.textContent = "Correct!";
			reset.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			button.style.color = clickedColor;
		} else {
			//If incorrect
			this.style.backgroundColor = "#232323";
			messageDisp.textContent = "Try Again";
		}
	})
}

function changeColors(color) {
	//loop through all colors to match colors
	for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	//get a random number
	var rand = Math.floor(Math.random()*colors.length);
	return colors[rand];
}

function generateRandomColors(num) {
	//make an array
	var arr = []
	//add num random colors to array
	for(var i=0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return random colors
	return arr;
}

function randomColor() {
	//pick a "red" from 0-255
	var r =Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g =Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b =Math.floor(Math.random()*256);
	//make color
	return "rgb("+ r + ", "+ g + ", "+ b + ")";
}