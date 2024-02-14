// Initial variables

let hostButton = document.getElementById("host");
let joinButton = document.getElementById("join");

let codeFieldContainer = document.querySelector(".codefield-container");

var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Generate a random sequence of characters in "characters" based on length
function randchar(length) {
    let code = "";
    for (let i = 0; i < length; i++) {
        code += characters[Math.floor(Math.random() * characters.length)];
    }

    return code.toUpperCase();
}

// When "host" button is clicked
hostButton.addEventListener("click",function() {
    let roomCode = randchar(6);

    window.location = "src/room.php?code=" + roomCode + "&nick=admin";
    
    // fetch("src/host.php", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     body: roomCode,
    // });
})

// When join button is clicked
joinButton.addEventListener("click",function(){
    hostButton.style.display = "none";
    joinButton.style.display = "none";
    codeFieldContainer.style.display = "flex";
})