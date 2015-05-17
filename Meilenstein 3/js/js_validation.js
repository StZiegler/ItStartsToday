	/* function validation () {

		// überprüfung von Name, Vorname & Bauchautor auf Buchstaben, falls das Feld nicht leer ist 
		var f = document.forms["bookentry"];
		var isError = false;

		//vorname
		if(isNotText(f.vorname.value)) {
			isError = true;
			document.getElementById("vorname").classList.add("error");
		}

		// nachname
		if (isNotText(f.nachname.value)) {
			isError = true;
			document.getElementById("nachname").classList.add("error");
		}

		// buchautor
		if (isNotText(f.buchautor.value)) {
			isError = true;
			document.getElementById("buchautor").classList.add("error");
		}

		// Überprüfung Titel des Buches; alles erlaubt --> ggf. Prüfung auf 'Ausgefüllt' 
		if(f.buchtitel.value !== "") {
			document.getElementById("buchtitel").classList.add("error");
	}

	// check isbn --> max 13 numbers 

	if(isISBN(f.isbn.value)) {
		isError = false;
		document.getElementById("isbn").classList.add("error");

	}


	// check year of release --> max 4 years, not negative, not later than the current year 2015
	if(release(f.jahr.value)) {
		isError = false;
		document.getElementById('jahr').classList.add("error");
	}

		// Wenn ein Fehler ist erschent folgender Text:

		if (isError) {
			alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.');
		}

	}
	// end of validation


	// function for text
	function isNotText(value) {
		if (value !== "") {
			return value.search(/^[a-zA-Z]+$/) === -1;
		}
		else{
			return true;
		}
	} */

/* _________________________________________________________________________________________________________________ */

// ********** new ************* 
// start of validation function

function validation () {

	/* TODO: removal of required fields in Milestone 2*/
	/* TODO: cursor position */
	/* TODO: testing */


	// check form "bookentry" 
	var f = document.forms["bookentry"];
	var isError = false;

	// check fields name, vorname and buchautor of correctness 

		if(isNotText(f.vorname.value)) { // run isNotText function
			isError = true;
			document.getElementById("vorname").classList.add("error"); // edge field in red for error
		}

		// nachname
		if (isNotText(f.nachname.value)) {
			isError = true;
			document.getElementById("nachname").classList.add("error");
		}

		// buchautor
		if (isNotText(f.buchautor.value)) {
			isError = true;
			document.getElementById("buchautor").classList.add("error");
		}

		// check titel des buches; there are no wrong inputs --> letters, numbers additional characters are allowed

		if(f.buchtitel.value !== "") {
			document.getElementById("buchtitel").classList.add("error");

		//check isbn number run isbn function

	if(isNotISBN(f.isbn.value)) {
		isError = true;
		document.getElementById("isbn").classList.add("error");

	}

	// check year of release --> max 4 years, not negative, not later than the current year 2015

	if(release(f.jahr.value >=0 && f.jahr.value <=2015)) {
		isError = true;
		document.getElementById('jahr').classList.add("error");
	}

	if(circ(f.auflage.value >=0)) {
		isError=true;
		document.getElementById("auflage").classList.add("error");
	}

	// show error text in window
	if (isError) {
			alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.');
		}

	}

// end validation

function isNotText(value) {
    if (value !== "") { // check if entry is empty
        return !/^[a-zA-Z]+$/.test(value); // check if value is letter and negate the result 
    }
    else{
        return true;
    }
}

function isNotISBN(value) {
    if (value !== "") { // check if entry is empty 
        return !/^[0-9]{13}$/.test(value); // check if value is number of length 13 and negate the result 
    }
    else{
        return true;
    }
}

function release (value) {
	if (value!=="") { // check if entry is empty 
		return !/^[0-9]{4}$/.test(value); // check if year is a number of length 4 and not bigger than 2015 / smaller than 0
	} else {
		return true;
	}
}

	// check whitespace???? TODO
function circ (value) {
	if(value!=="") {
		return !/^[0-9]+$/.test(value);
	}
	else {
		return true;
	}
}