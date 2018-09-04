//isEven

function isEven(num) {
	if(num % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

//factorial

function factorial(num) {
	var result = 1;
	for (var i = 2; i <= num; i++){
		result *= i;
	}
	return result
}

//kebabToSnake

function kebabToSnake(str) {
	//replace all '-' with '_'
	var newstr = str.replace(/-/g, "_");
	//return str
	return newstr
}