<?php
require("connection.php");
$roomCode = $_POST["roomCode"];

// Room creation
session_start();
$_SESSION["roomCode"] = $roomCode;

$SQL = "INSERT INTO Rooms VALUES ($roomCode)";
$conn -> query($SQL);