// Initial variables

let hostbtn = document.getElementById("host");
let joinbtn = document.getElementById("join");

let codefielddiv = document.getElementById("codefielddiv");

var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

// Generate a random sequence of characters in "characters" based on length
function randchar(length) {
    let code = "";
    for (let i = 0; i < length; i++) {
        code += characters[Math.floor(Math.random() * characters.length)];
    }

    return code;
}

// When "host" button is clicked
hostbtn.addEventListener("click",function(){
    hostbtn.style.display = "none"
    joinbtn.style.display = "none"
    
    let roomCode = randchar(6);
    
    document.getElementById("temptext").style.display = "block";
    
    document.getElementById("temptext").innerHTML = roomCode;
    
    fetch("host.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: roomCode,
    });
})

// When join button is clicked
joinbtn.addEventListener("click",function(){
    hostbtn.style.display = "none"
    joinbtn.style.display = "none"
    codefielddiv.style.display="block"
})