	function validation () {

		/* Überprüfung von Name, Vorname & Bauchautor auf Buchstaben, falls das Feld nicht leer ist */
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

		if (isError) {
			alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.');
		}

	}
	// end of validation

	function isNotText(value) {
		if (value !== "") {
			return value.search(/^[a-zA-Z]+$/) === -1;
		}
		else{
			return true;
		}
	}

	/* alles erlaubt --> ggf. Prüfung auf 'Ausgefüllt' 
	if(f.buchtitel.value !== "")
	alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie Ihre Eingaben.');


	//alert('Die Formularfelder werden an das php-Skript http://martinakraus.net/createBookEntry.php übertragen!');
	*/
