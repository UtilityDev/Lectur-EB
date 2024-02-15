<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Empty Room - Lectur</title>
    <link rel="stylesheet" href="../styles/room.css">
    <link rel="stylesheet" href="../styles/icons.css">
    <link rel="stylesheet" href="../styles/swal.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />    
</head>
<body>
    <div class="top-container">
        <!-- <span class="leave_icon"><</span> -->
        <span class="leave_icon material-symbols-rounded icon-align">arrow_back_ios_new</span>
        <div class="room-code-container">
            <span class="header_text">Room: <span class="room_code">[ROOM_CODE]</span></span>
            <span class="code-copy material-symbols-rounded icon-align">content_copy</span>
        </div>
        <span class="nick_text">[NICK_NAME]</span>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="room.js"></script>
</body>
</html>
<?php

session_start();

if (isset($_POST["LEAVE"])) {
    echo "Leaving...";
}

?>