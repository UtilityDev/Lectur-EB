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

echo "Connected successfully ";