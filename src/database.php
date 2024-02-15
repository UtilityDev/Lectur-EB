<?php
$servername = "lectureu01.mysql.domeneshop.no";
$username = "lectureu01";
$password = "hvor-klepp-2Best-doen"; 
$dbname = "lectureu01"; 
$port = "21";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: ". $conn->connect_error);
}

function tableInsert(string $table, string $values, mysqli $conn) {
    $conn->query("INSERT INTO $table VALUES ($values);");
}

function insertRoom(string $roomCode, string $adminId, $conn) {
    $conn->query("INSERT INTO Rooms (room_code, admin_id) VALUES ('$roomCode', '$adminId');");
}

// Check if room exists
function roomExists(string $code, mysqli $conn) : bool
{
    $result = $conn->query("SELECT * FROM Rooms WHERE room_code = '$code'");
    return ($result->num_rows > 0);
}