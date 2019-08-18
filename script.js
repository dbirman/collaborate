function chgBkg(cell) {
	if (cell.className=="w"){
		cell.className = "g";
	} else if (cell.className=="g"){
		cell.className = "b";
	} else {
		cell.className = "w";
	}
	generateHTML();
}

function generateHTML() {
	// Generate the inner html 
	var temp = "<p>" + document.getElementById("table").innerHTML + "</p>";
	var temp = temp.replace(/ onclick.*>/g,">");
	var temp = temp.replace("style.css","http://collaborate.danbirman.com/style.css")
	document.getElementById("raw").innerHTML = temp;
}

window.onload = generateHTML;