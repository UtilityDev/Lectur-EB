<?php

require("database.php");

$nickname = null;
$code = null;

if (isset($_POST["nickname"])) { $nickname = $_POST["nickname"]; }
if (isset($_POST["code"])) { $code = $_POST["code"]; }

if (!roomExists($code, $conn))
{
    insertRoom($code, 0, $conn);
}