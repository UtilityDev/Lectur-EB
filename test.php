<?php
require("connection.php");

$roomCode = $_POST["roomCode"];

$SQL = "INSERT INTO Users (user_name, room_code, is_active) VALUES ('Ole Normann', $roomCode, 0)";
$conn -> query($SQL);