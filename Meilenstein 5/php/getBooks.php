<?php

$horror_books_file = "../json/horror_books.json";
$roman_books_file = "../json/roman_books.json";

// get category from GET-request
$category = $_GET["category"];

if ($category == "horror") {
    $data = file_get_contents($horror_books_file);
}

if ($category == "roman") {
    $data = file_get_contents($roman_books_file);
}

if ($data != null && $data != false) {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
    header('Access-Control-Allow-Credentials: true');
    echo $data;
}

?>
