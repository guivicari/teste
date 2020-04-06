var todos = ["Buy a new car", "Wash my hands 3000 times", "do the dishes"];
var input = prompt("What would you like to do?");

while(input !== "quit"){
    if(input === "new"){
        addNew();
    } else if(input === "list") {
        listTodos();
    } else if(input === "delete"){
        deleteToDo();
    }
    var input = prompt("What would you like to do?");
}
console.log("You are out of the app"); 

function listTodos() {
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
   // console.log(todos);
    console.log("ao contrário do que me disseram:   " + todos.forEach(function(todoReversereverse());
}

function addNew() {
    var newToDo = prompt("Type a todo");
    todos.push(newToDo);
    console.log("New entry added");
}

function deleteToDo(index) {
    var index = prompt("Type a todo index to delete");
    todos.splice(index, 1);
    console.log("Entry deleted");
}

