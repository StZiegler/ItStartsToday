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

function isLoaded(table){

    if(table == "horror"){
        document.getElementById("horror").style.background = "rgb(0,162,232)";
        document.getElementById("roman").style.background = "rgb(63,72,204)";
        hide_elements('bookTableRoman');
        show_elements('bookTableHorror');
    }else if(table == "roman"){
        document.getElementById("roman").style.background = "rgb(0,162,232)";
        document.getElementById("horror").style.background = "rgb(63,72,204)";
        hide_elements('bookTableHorror');
        show_elements('bookTableRoman');
    }
}

//------------------------------>REQUEST an Server
function loadDbBook(str) {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://localhost/WAW-Project/ItStartsToday/Meilenstein 6/php/getBooks.php?q="+str;

    // Anfrage erstellen
    xmlhttp.open("GET",url,true);

    xmlhttp.onreadystatechange = function () {

        // Antwort des Servers liegt vollständig vor und die Anfrage war erfolgreich
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if(str == "horror"){
                document.getElementById("bookTableHorror").innerHTML = xmlhttp.responseText;
            }
            else {
                document.getElementById("bookTableRoman").innerHTML = xmlhttp.responseText;
            }
            document.getElementById("horror").style.background = "rgb(0,162,232)";
        }
    }
    // Anfrage absenden
    xmlhttp.send();
}
