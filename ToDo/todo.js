var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "list") {
		listtodos();
	} else if(input === "new") {
		addtodo();
	} else if(input === "delete"){
		deletetodo();
	}
	input = prompt("What would you like to do?");
}
console.log("Ok, quitting the application")

function listtodos() {
	console.log("**************");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("**************");
}

function addtodo() {
	var newtodo = prompt("Enter new todo");
	todos.push(newtodo);
	console.log("added todo")
}

function deletetodo() {
	var index = prompt("Enter index of item to delete");
	//introduces splice, removes the only index selected
	todos.splice(index, 1);
	console.log("Item deleted");
}