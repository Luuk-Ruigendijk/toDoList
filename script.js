var howManyTables = 0;

function createList(){
	var tableCreation = document.createElement("table");
	tableCreation.setAttribute("id", howManyTables);
	document.getElementById("allTables").appendChild(tableCreation);

	var removeListButton = document.createElement("button");
	document.getElementById(howManyTables).appendChild(removeListButton);
	removeListButton.innerHTML = "Remove list";
	removeListButton.setAttribute("onclick", "removeTable(howManyTables)")

	howManyTables++;
}

function removeTable(tableId){
	var removeTableElement = document.getElementById(howManyTables);
	removeTableElement.remove();
}