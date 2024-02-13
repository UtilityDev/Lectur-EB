<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Empty Room - Lectur</title>
</head>
<body>
    <h1>Empty Room - Lectur</h1>
</body>
</html>
<?php
    require("connection.php");

    $code = null;

    echo "Room Code: ";
    if (isset($_GET["code"])) {
        echo $_GET["code"];
        $code = $_GET["code"];
    } else {
        echo "NULL";
    }

    // Write room to database
    $conn->query("INSERT INTO Rooms VALUES ('$code', 1)");
?>