/**
 * Created by Ralf on 07.05.2015.
 */
var xmlhttp = new XMLHttpRequest();
var romandata = "../json/romanbooks";
var horrordata = "../json/horrorbooks";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}

xmlhttp.open("GET", horrordata, true);
xmlhttp.send();

function myFunction(response) {

    var arr = JSON.parse(response);
    var i;
    var out = "<table>";

    out += "<tr><td>" + "Autor" +
    "</td><td>" + "Titel" +
    "</td><td>" + "Kapitel" +
    "</td><td>" + "Buchart" +
    "</td><td>" + "ISBN" +
    "</td><td>" + "Erscheinungsjahr" +
    "</td><td>" + "Auflage" +
    "</td></tr>";

    for(i = 0; i < arr.length; i++) {
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

    document.getElementById("id01").innerHTML = out;
}


function change(){
    document.getElementById('001').innerHTML = document.getElementById('002');
}







function visibilityhorror() {
    if(document.getElementById('id01').style.visibility=='hidden'){
        document.getElementById('id01').style.visibility='visible';
    }else{
        document.getElementById('id01').style.visibility='hidden';
    }
}

function visibilityroman() {
    if(document.getElementById('id02').style.visibility=='hidden'){
        document.getElementById('id02').style.visibility='visible';
    }else{
        document.getElementById('id02').style.visibility='hidden';
    }
}