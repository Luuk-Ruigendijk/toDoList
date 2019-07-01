var howManyTables = 0;
var howManyItems = 0;

function createList(){
	var createTableName = prompt("Please enter a name for your table", "");
	if (createTableName == null || createTableName == "") {
    	alert("User cancelled the prompt.");
  	} 
  	else {
	    var tableCreation = document.createElement("table");
		tableCreation.setAttribute("id", "table"+howManyTables);
		document.getElementById("allTables").appendChild(tableCreation);
		var tableNameCreation = document.createElement("th");
		tableNameCreation.innerHTML = createTableName;
		tableCreation.appendChild(tableNameCreation);

		var removeListButton = document.createElement("button");
		document.getElementById("table"+howManyTables).appendChild(removeListButton);
		removeListButton.innerHTML = "Remove list";

		let tableName = 'table' + howManyTables;
		//removeListButton.setAttribute("onclick", 'removeTable('+tableName+')');

		removeListButton.addEventListener("click", function() {
	  		removeTable(tableName);
		});
		var addItemButton = document.createElement("button");
		document.getElementById("table"+howManyTables).appendChild(addItemButton);
		addItemButton.innerHTML = "Add item";
		addItemButton.addEventListener("click", function() {
	  		createItem(tableName);
		});
		howManyTables++;
	}
}

function removeTable(tableId){
	var removeTableElement = document.getElementById(tableId);
	removeTableElement.remove();
}

function createItem(tableId){
	var createItemName = prompt("What task do you want to add?", "");
	if (createItemName == null || createItemName == "") {
    alert("User cancelled the prompt.");
  	} 
  	else {
	var itemFieldCreation = document.createElement("tr");
	var itemNameCreation = document.createElement("td");
	howManyItems = 0;
	itemFieldCreation.setAttribute("class", "itemFrom"+tableId);
	//countItems();
	//itemFieldCreation.setAttribute("id", tableId+"item"+howManyItems);
	//itemFieldCreation.setAttribute("class", tableId+"item"+howManyItems);
	itemNameCreation.innerHTML = createItemName;
	document.getElementById("table"+howManyTables).appendChild(itemFieldCreation);
	itemFieldCreation.appendChild(itemNameCreation);
	itemFieldCreation.appendChild(itemCreation);
	}	
}

/*function countItems{
	if ("table"+tableId+"item"+howManyItems == true) {howManyItems++; countItems()}
}*/

var currentTest = 0;
var checkTheConsole = "test"+currentTest;
console.log(checkTheConsole);
function tryingShitOut(){
	var checkElement = document.getElementById("test"+currentTest);
	console.log(checkElement);
	if (checkElement) {currentTest++; console.log("yo"); tryingShitOut();}
	else{console.log("something ain't workin' m8")};

	let tableElements = document.getElementsByClassName("testTables");
	for (var i = 0; i < tableElements.length; i++) {
		console.log(tableElements[i]);
	}
}

tryingShitOut();