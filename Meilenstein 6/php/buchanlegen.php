<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myBooks";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Using database
$sql = "USE $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Database connection opened successfully";
} else {
    echo "Error couldn't be opened due error: " . $conn->error;
}


// Prüfen, ob Formulardaten zum Speichern vorliegen:
if (isset($_GET['eintragen'])) {

    // Inhalte der Felder holen
    $vorname = $_GET['vorname'];
    $nachname = $_GET['nachname'];
    $name = $vorname." ".$nachname;
    $titel = $_GET['titel'];
    $autor = $_GET['autor'];
    $kapitel = (int) $_GET['kapitel'];
    $isbn = $_GET['isbn'];
    $erscheinungsjahr = (int) $_GET['erscheinungsjahr'];
    $auflage = (int) $_GET['auflage'];
    $favorit = isset( $_GET['favorit'] ) ? 1 : 0;
    $art = $_GET['art'];
    $isHorror = isset( $_GET['horror'] ) ? 1 : 0;
    $isPsycho = isset( $_GET['psycho'] ) ? 1 : 0;
    $isKrimi = isset( $_GET['krimi'] ) ? 1 : 0;
    $isDoku = isset( $_GET['doku'] ) ? 1 : 0;
    $isKomoedie = isset( $_GET['komoedie'] ) ? 1 : 0;
    $isRoman = isset( $_GET['roman'] ) ? 1 : 0;

    // Variable zum Festhalten der Fehler
    $isError = false;

    // buchtitel
    if ($titel == "") {
        $isError = true;
    }

    // buchautor
    if (isNotText($autor)) {
        echo "Autor ist kein Text \n";
        $isError = true;
    }

    //isbn number
    if(isNotISBN($isbn)) {
        echo "ISBN ist keine Nummer \n";
        $isError = true;
    }

    // kapitel
    if (isNotCap($kapitel)) {
        echo "Kapitel ist fehlerhaft \n";
        $isError = true;
    }

    // jahr
    if (isNotRelease($erscheinungsjahr)) {
        echo "Jahr ist fehlerhaft \n";
        $isError = true;
    }

    //auflage
    if (isNotCirc($auflage)) {
        echo "Auflage ist fehlerhaft \n";
        $isError = true;
    }
    
    //vorname
    if (isNotText($vorname)) {
        echo "Vorname ist fehlerhaft \n";
        $isError = true;
    }

    // nachname
    if (isNotText($nachname)) {
        echo "Nachname ist fehlerhaft \n";
        $isError = true;
    }

    // Speicher die Daten in der Datenbank, falls kein Fehler vorliegt
    if (!$isError) {
        $userId = 0;
        $bookId = 0;

        $sqli = "SELECT id FROM benutzerInfo WHERE vorname='$vorname' AND nachname ='$nachname'"; 
        $sqlResult = mysqli_query($conn, $sqli); 

        while ($row = mysqli_fetch_array($sqlResult)) {
            $userId = $row["id"];
        }

        echo "<p>UserID erhalten: " . $userId . "</p>";
    

        // Anfrage für den User zusammenstellen der an die DB geschickt werden soll
        if($userId == 0) {
	        $sql = "INSERT INTO benutzerInfo (vorname, nachname)
	        VALUES('$vorname', '$nachname')";

	        $sqlResult = mysqli_query($conn,$sql);
	        if (!$sqlResult) {
	            echo "Datensatz konnte nicht gespeichert werden";
	        } else {
		        $userId = mysqli_insert_id($conn);
		        echo "<p>UserID erhalten: " . $userId . "</p>";
	        }
        }   

        // Anfrage für das Buch zusammenstellen der an die DB geschickt werden soll
        $sql = "INSERT INTO book (autor, titel, kapitel, buchart, isbn, erscheinungsjahr, auflage, isHorror, isPsycho, isKrimi,
        isDoku, isKomoedie, isRoman, user_id)
        VALUES('$autor', '$titel', '$kapitel', '$art', '$isbn', '$erscheinungsjahr', '$auflage', '$isHorror', '$isPsycho',
        '$isKrimi', '$isDoku', '$isKomoedie', '$isRoman', '$userId')";

        // Schickt die Anfrage an die DB und schreibt die Daten in die Tabelle
        $sqlResult = mysqli_query($conn,$sql);

        if (!$sqlResult) {
            echo "Datensatz konnte nicht gespeichert werden";
        } else {
        	$bookId = mysqli_insert_id($conn);
        	 echo "<p>BuchID erhalten: " . $bookId . "</p>";
        }

        // Falls Favorit, dann Anfrage für die Favoriten erstellen
        if ($favorit == 1 && $userId > 0 && $bookId > 0) {
	        $sql = "INSERT INTO favorit (user_id, book_id)
	        VALUES('$userId', '$bookId')";

	        $sqlResult = mysqli_query($conn,$sql);
	        if (!$sqlResult) {
	            echo "Datensatz konnte nicht gespeichert werden";
	        }
        }
        // go back to home if form data was ok
        header("Location: ../../Meilenstein 2/html/home.html");
        die();

    } else {
        echo "\n Die Daten sind Fehlerhaft, weshalb diese nicht in der Datenbank gespeichert werden können!";
    }


} // ENDE: if(isset($_GET['eintragen'])) ...

mysqli_close($conn);


//validation function
function isNotText($value) {
    if($value != "") {
       return preg_match("/^[a-zA-Z[:space:]]+$/", $value) == 0;
    }

    return true;
}
// check isbn 13 numbers
function isNotISBN($value) {
    if ($value != "") {
        return preg_match("/^[0-9]{13}$/", $value) == 0;
    }
    return true;
}
// check release date between 1000 and 2015
function isNotRelease ($value) {
    if ($value != "") {
        // not smaller than 1000 and not bigger than 2015
        if($value >=1000 && $value <=2015) {
            // numberlength = 4
            return preg_match("/^[0-9]{4}$/",$value) == 0;
        }
    }
    return true;
}
// check auflage bigger 0
function isNotCirc ($value) {
    if($value != "") {
        if ($value > 0) {
            return preg_match("/^[0-9]+$/", $value) == 0;
        }
    }
    return true;
}
// check capitel bigger 0
function isNotCap ($value) {
    if($value !="") {
        if($value > 0) {
            return preg_match("/^[0-9]+(\.[0-9][0-9]?)?$/", $value) == 0;
        }
    }
    return true;
}



?>
