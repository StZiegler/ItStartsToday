<?php

$myfile = fopen("../text/books.txt", "w") or die("Unable to open file!");


$autor = $_GET["Buchautor"].", ";
$titel = $_GET["Titel"].", ";
$kapitelanzahl = $_GET["Kapitel"]." Kapitel, ";
$buchart = $_GET["Art"].", ";
$ISBN = $_GET["ISBN"].", ";
$erscheinungsjahr = $_GET["Erscheinungsjahr"].", ";
$Auflage = $_GET["Auflage"].". Auflage;";


fwrite($myfile, $autor);
fwrite($myfile, $titel);
fwrite($myfile, $kapitelanzahl);
fwrite($myfile, $buchart);
fwrite($myfile, $ISBN);
fwrite($myfile, $erscheinungsjahr);
fwrite($myfile, $Auflage);

fclose($myfile);


echo "<h2>Your Input:</h2>";

echo $autor;
echo "<br>";
echo $titel;
echo "<br>";
echo $kapitelanzahl;
echo "<br>";
echo $buchart;
echo "<br>";
echo $ISBN;
echo "<br>";
echo $erscheinungsjahr;
echo "<br>";
echo $Auflage;

?>
