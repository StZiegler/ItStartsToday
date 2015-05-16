function firstload(){
    var horror = document.getElementById("horror");
    horror.checked = true;
    createHorrorBook();
}

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

// JSON File "Horror" laden und an createTable() übergeben
function createHorrorBook() {
    var xmlhttp_horror = new XMLHttpRequest();
    var horrorbooks = "../json/horror_books.json";

    xmlhttp_horror.onreadystatechange = function () {
        var response = xmlhttp_horror.responseText;
        var arr = JSON.parse(response);

        if (xmlhttp_horror.readyState == 4 && xmlhttp_horror.status == 200) {
            var out = createTable(arr.horrordata);
            document.getElementById("id01").innerHTML = out;
            document.getElementById("horror").style.background = "rgb(0,162,232)";
            document.getElementById("roman").style.background = "rgb(63,72,204)";
        }
    }
    xmlhttp_horror.open("GET", horrorbooks, true);
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
            var out = createTable(arr.romandata);
            document.getElementById("id02").innerHTML = out;
            document.getElementById("roman").style.background = "rgb(0,162,232)";
            document.getElementById("horror").style.background = "rgb(63,72,204)";
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