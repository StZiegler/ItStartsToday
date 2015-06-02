// Elemente einblenden
function show_elements()
{
    var elementNames = show_elements.arguments;
    for (var i=0; i < elementNames.length; i++){
        var elementName = elementNames[i];
        document.getElementById(elementName).style.display='block';
    }
}

// Elemente ausblenden
function hide_elements()
{
    var elementNames = hide_elements.arguments;
    for (var i=0; i < elementNames.length; i++){
        var elementName = elementNames[i];
        document.getElementById(elementName).style.display='none';
    }
}

function isLoaded(exists){

    if(exists){
        document.getElementById("horror").style.background = "rgb(0,162,232)";
        document.getElementById("roman").style.background = "rgb(63,72,204)";
        hide_elements('id02');
        show_elements('id01');
    }else {
        document.getElementById("roman").style.background = "rgb(0,162,232)";
        document.getElementById("horror").style.background = "rgb(63,72,204)";
        hide_elements('id01');
        show_elements('id02');
    }
}


// JSON File "Horror" laden und an createTable() übergeben
function createHorrorBook() {
    var xmlhttp_horror = new XMLHttpRequest();
    var horrorbooks = "../json/horror_books.json";

    xmlhttp_horror.onreadystatechange = function () {
        //Serverantwort der Anfrage als String
        var response = xmlhttp_horror.responseText;
        var arr = JSON.parse(response);

        // Antwort des Servers liegt vollständig vor und die Anfrage war erfolgreich
        if (xmlhttp_horror.readyState == 4 && xmlhttp_horror.status == 200) {
            document.getElementById("id01").innerHTML = createTable(arr.horrordata);
            document.getElementById("horror").style.background = "rgb(0,162,232)";
        }
    }
    // Anfrage erstellen
    xmlhttp_horror.open("GET", horrorbooks, true);
    // Anfrage absenden
    xmlhttp_horror.send();
}

// JSON File "Roman" laden und an createTable() übergeben
function createRomanBook() {
    var xmlhttp_roman = new XMLHttpRequest();
    var romanbooks = "../json/roman_books.json";

    xmlhttp_roman.onreadystatechange = function () {
        var response = xmlhttp_roman.responseText;
        var arr = JSON.parse(response);

        if (xmlhttp_roman.readyState == 4 && xmlhttp_roman.status == 200) {
            document.getElementById("id02").innerHTML = createTable(arr.romandata);
        }
    }
    xmlhttp_roman.open("GET", romanbooks, true);
    xmlhttp_roman.send();
}

// dynamische Tabelle erzeugen
function createTable(arr) {
    var i;
    var out = "<table>";

    out += "<tr id='tableHead'><td>" + "Autor" +
    "</td><td>" + "Titel" +
    "</td><td>" + "Kapitel" +
    "</td><td>" + "Buchart" +
    "</td><td>" + "ISBN" +
    "</td><td>" + "Erscheinungsjahr" +
    "</td><td>" + "Auflage" +
    "</td></tr>";

    for (i = 0; i < arr.length; i++) {
        out += "<tr><td>" +
        arr[i].autor +
        "</td><td>" +
        arr[i].titel +
        "</td><td>" +
        arr[i].kapitel +
        "</td><td>" +
        arr[i].buchart +
        "</td><td>" +
        arr[i].ISBN +
        "</td><td>" +
        arr[i].erscheinungsjahr +
        "</td><td>" +
        arr[i].auflage +
        "</td></tr>";
    }
    out += "</table>"

    return out;
}