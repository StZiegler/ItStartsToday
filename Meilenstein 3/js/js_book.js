function changeHorror() {
    var xmlhttp_horror = new XMLHttpRequest();
    var horrorbooks = "../json/horror_books.json";

    xmlhttp_horror.onreadystatechange = function () {
        if (xmlhttp_horror.readyState == 4 && xmlhttp_horror.status == 200) {
            var out = myFunction(xmlhttp_horror.responseText);
            document.getElementById("id01").innerHTML = out;
        }
    }
    xmlhttp_horror.open("GET", horrorbooks, true);
    xmlhttp_horror.send();
}


function changeRoman() {
    var xmlhttp_roman = new XMLHttpRequest();
    var romanbooks = "../json/roman_books.json";

    xmlhttp_roman.onreadystatechange = function () {
        if (xmlhttp_roman.readyState == 4 && xmlhttp_roman.status == 200) {
            var out = myFunction(xmlhttp_roman.responseText);
            document.getElementById("id02").innerHTML = out;
        }
    }
    xmlhttp_roman.open("GET", romanbooks, true);
    xmlhttp_roman.send();
}


function myFunction(response) {

    var arr = JSON.parse(response);
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