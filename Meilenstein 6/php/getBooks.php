<!DOCTYPE html>
<html>
<head>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }

        table, td, th {
            border: 3px solid;
            padding: 5px;
            border-color: rgb(63,72,204);
        }

        th {
            text-align: center;
        }
        #head {
            color: black;
        }
    </style>
</head>
<body>

<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Access-Control-Allow-Credentials: true');

$con = mysqli_connect('localhost','root','','myBooks');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$q = $_GET['q'];

if($q == "horror")
    $sql="SELECT * FROM book WHERE isHorror = '1'";

if($q == "roman")
    $sql="SELECT * FROM book WHERE isRoman = '1'";

$result = mysqli_query($con,$sql);

echo "<table>
<tr id='head'>
<th>Autor</th>
<th>Titel</th>
<th>Kapitel</th>
<th>Buchart</th>
<th>ISBN</th>
<th>Erscheinungsjahr</th>
<th>Auflage</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['autor'] . "</td>";
    echo "<td>" . $row['titel'] . "</td>";
    echo "<td>" . $row['kapitel'] . "</td>";
    echo "<td>" . $row['buchart'] . "</td>";
    echo "<td>" . $row['isbn'] . "</td>";
    echo "<td>" . $row['erscheinungsjahr'] . "</td>";
    echo "<td>" . $row['auflage'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>