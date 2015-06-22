<?php

// sql to create table User
$sql = "CREATE TABLE benutzerInfo (
id INT(6) UNSIGNED NOT NULL AUTO_INCREMENT,
vorname VARCHAR(30) NOT NULL,
nachname VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
)ENGINE = InnoDB";

if ($conn->query($sql) === TRUE) {
    echo "Table created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

// sql to create table book
$sql = "CREATE TABLE book (
id INT(6) UNSIGNED AUTO_INCREMENT NOT NULL,
user_id INT(6) UNSIGNED NOT NULL,
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
PRIMARY KEY (id),
UNIQUE (isbn, user_id),
FOREIGN KEY (user_id) REFERENCES benutzerInfo(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE
)ENGINE = InnoDB";

if ($conn->query($sql) === TRUE) {
    echo "Table created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

// sql to create table User
$sql = "CREATE TABLE favorit (
user_id INT(6) UNSIGNED NOT NULL,
book_id INT(6) UNSIGNED NOT NULL,
FOREIGN KEY (user_id) REFERENCES benutzerInfo(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE,
FOREIGN KEY (book_id) REFERENCES book(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE
)ENGINE = InnoDB";

if ($conn->query($sql) === TRUE) {
    echo "Table created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

?>