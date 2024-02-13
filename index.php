<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lectur</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/875f8e9144.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="main-content">
        <h1 class="title">Lectur</h1>
        <div class="main-buttons">
            
            <button class="btn blue" id="host"><i class="fa-solid fa-plus"></i> Host Room</button>
            <button class="btn blue" id="join"><i class="fa-solid fa-bolt"></i> Join Room</button>
            <p id="codeText" style="display: none">code</p>
            <div style="display:none" class="codefield-container">
                <input type="text" class="textbox" id="codefield", placeholder="Room code">
                <input type="text" class="textbox" id="codefield", placeholder="Nickname">
                <button class="btn full blue"><i class="fa-solid fa-bolt"></i> Join</button>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
    <script src="background.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js" integrity="sha512-uaz5GpnQoE6t5echKlX8P52czvsIGgLPcvlzfvRubLZ1Hp8JemUDnbUiAahbVtPb+jUVrNETuXvAhDDF/N3M4w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>
</html>