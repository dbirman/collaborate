function chgBkg(cell) {
	if (cell.className=="w"){
		cell.className = "g";
	} else if (cell.className=="g"){
		cell.className = "b";
	} else {
		cell.className = "w";
	}
}