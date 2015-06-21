<?php

// sql to create table book
$sql = "CREATE TABLE book (
book_id INT(6) AUTO_INCREMENT NOT NULL,
autor VARCHAR(30) NOT NULL,
titel VARCHAR(30) NOT NULL,
kapitel INT(10) NOT NULL ,
buchart VARCHAR(30) NOT NULL ,
isbn VARCHAR (30) NOT NULL,
erscheinungsjahr INT(4) NOT NULL,
auflage INT(30) NOT NULL,
isHorror INT (1) NOT NULL,
isPsycho INT (1) NOT NULL,
isKrimi INT (1) NOT NULL,
isDoku INT (1) NOT NULL,
isKomoedie INT (1) NOT NULL,
isRoman INT (1) NOT NULL,
PRIMARY KEY (book_id)
)ENGINE = InnoDB;";

if ($conn->query($sql) === TRUE) {
    echo "Table created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}


// sql to create table User
$sql = "CREATE TABLE benutzerInfo (
user_id INT(6) AUTO_INCREMENT NOT NULL,
vorname VARCHAR(30) NOT NULL,
nachname VARCHAR(30) NOT NULL,
favorit INT(1) NOT NULL,
PRIMARY KEY (user_id)
)ENGINE = InnoDB;";

if ($conn->query($sql) === TRUE) {
    echo "Table created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

?>