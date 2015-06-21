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
    echo "Database using successfully";
} else {
    echo "Error using db: " . $conn->error;
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

    //Anzahl aktiver checkboxen
    $anzahl = count ( $_GET['genre'] );

    if ( $anzahl == 1 )  {
        $genre = $_GET['genre'][0];
    }
    //Wenn mehrere Checkboxen aktiviert sind, muss eine Schleife durchlaufen werden
    else if ( $anzahl > 1 ) {
        //erstellt ein leeres array
        $arten = array ();
        foreach ( $_GET['genre'] as $art ){
            $arten[] = $art ;
        }
        // implode() Verbindet Array-Elemente zu einem String
        $genre = implode ( ', ', $arten );
    }else{
        $genre="-";
    }

    // Anfrage zusammenstellen der an die DB geschickt werden soll
    $sql = "INSERT INTO book (autor, titel, kapitel, buchart, isbn, erscheinungsjahr, auflage, genre)
        VALUES('$autor', '$titel', '$kapitel', '$art', '$isbn', '$erscheinungsjahr', '$auflage', '$genre')";

    // Schickt die Anfrage an die DB und schreibt die Daten in die Tabelle
    $sqlResult = mysqli_query($conn,$sql);

    if (!$sqlResult) // Datensatz konnte nicht gespeichert werden:
        echo "Datensatz konnte nicht gespeichert werden";

    // Anfrage zusammenstellen der an die DB geschickt werden soll
    $sql = "INSERT INTO benutzerInfo (benutzer, favorit)
        VALUES('$name', '$favorit')";

    $sqlResult = mysqli_query($conn,$sql);
    if (!$sqlResult)
        echo "Datensatz konnte nicht gespeichert werden";

} // ENDE: if(isset($_GET['eintragen'])) ...

mysqli_close($conn);

?>
