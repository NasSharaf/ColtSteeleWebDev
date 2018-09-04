var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function(){
	if(isPurple) {
		document.body.style.background = "white";
		isPurple = false;
	} else {
		document.body.style.background = "purple";
		isPurple = true;
	}
});

//Shorter way, but requires a style tage set to purple in HTML File/CSS file

/*button.addEventListener("click", function(){
	document.body.classList.toggle("purple")
})*/