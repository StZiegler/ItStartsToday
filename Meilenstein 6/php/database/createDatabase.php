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

// Create database
$sql = "CREATE DATABASE $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

// Using database
$sql = "USE $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Database using successfully";
} else {
    echo "Error using db: " . $conn->error;
}

// sql to create table
include 'createTable.php';

//Close the Connection
$conn->close();

?>