let hostbtn = document.getElementById("host");
let joinbtn = document.getElementById("join");

let hosttext = document.getElementById("temptext");
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

hostbtn.addEventListener("click",function(){
    hostbtn.style.display = "none"
    joinbtn.style.display = "none"
    
    let roomCode = randchar(6);
    document.getElementById("temptext").innerHTML = roomCode;
    fetch("test.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: roomCode,
    });

    hosttext.style.display = "block"
})

joinbtn.addEventListener("click",function(){
    hostbtn.style.display = "none"
    joinbtn.style.display = "none"
    codefielddiv.style.display="block"
})