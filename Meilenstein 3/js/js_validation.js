// start of validation function
function validation () {

	var f = document.forms["bookentry"];
	var isError = false;
	var errorCounter = 0;

	// buchtitel
	if (f.buchtitel.value == "") {
			isError = true;
			// add red border fields with wrong content
			f.buchtitel.classList.add("error");
			// increment fields for curser position
			errorCounter++;
			cursorPos(errorCounter, f.buchtitel);
		}

	// buchautor
	if (isNotText(f.buchautor.value)) {
			isError = true;
			f.buchautor.classList.add("error");
			errorCounter++;
			cursorPos(errorCounter, f.buchautor);
		}

	//isbn number
	if(isNotISBN(f.isbn.value)) {
			isError = true;
			f.isbn.classList.add("error");
			errorCounter++;
			cursorPos(errorCounter, f.isbn);
		}

	// kapitel
	if (isNotCap(f.kapitel.value)) {
			isError = true;
			f.kapitel.classList.add("error");
			errorCounter++;
			cursorPos(errorCounter, f.kapitel);
		}

	// jahr
	if (isNotRelease(f.jahr.value)) {
			isError = true;
			f.jahr.classList.add("error");
			errorCounter++;
			cursorPos(errorCounter, f.jahr);
		}

	//auflage
	if (isNotCirc(f.auflage.value)) {
			isError = true;
			f.auflage.classList.add("error");
			errorCounter++;
			cursorPos(errorCounter, f.auflage);
		}

	//vorname
	if (isNotText(f.vorname.value)) { 
			isError = true;
			f.vorname.classList.add("error");
			errorCounter++;
			cursorPos(errorCounter, f.vorname);
		}

	// nachname
	if (isNotText(f.nachname.value)) {
			isError = true;
			f.nachname.classList.add("error");
			errorCounter++;
			cursorPos(errorCounter, f.nachname);
		}

	// show error message in window
	if (isError) {
			alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.');
		return false;
		}
		else {
			return true;
		}
	}
// end validation

// functions; 
// check name, vorname, buchautor 

function isNotText(value) {
	// check if field is empty
    if (value != "") { 
    	// only letters are allowed
        return !/^[a-zA-Z]+$/.test(value); 
    }
        return true;
}

// check isbn --> only 13 digits are allowed 
function isNotISBN(value) {
    if (value != "") { 
        return !/^[0-9]{13}$/.test(value); 
    }
        return true;
}
// check jahr --> 
function isNotRelease (value) {
	if (value != "") { 
		// not smaller than 1000 and not bigger than 2015
		if(value >=1000 && value <=2015) {
			// numberlength = 4  
			return !/^[0-9]{4}$/.test(value);
		}
	}
	return true;
}

// check auflage
function isNotCirc (value) {
	if(value != "") {
		if (value >0) {
		return !/^[0-9]+$/.test(value);
	}
		}
		return true;
}

// check kapitel 
function isNotCap (value) {
	if(value !="") {
		if(value >0) {
			return !/[0-9]+(\.[0-9][0-9]?)?/.test(value);
		}
	}
	return true;
}

// place cursor on the first field with an error
function cursorPos (errorCounter, element) {
	if(errorCounter == 1) {
		element.focus();
	}
}