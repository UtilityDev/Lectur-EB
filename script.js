let hostbtn = document.getElementById("host");
let joinbtn = document.getElementById("join");

let hosttext = document.getElementById("temptext");
let codefielddiv = document.getElementById("codefielddiv");

var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

function randchar (length) {
    var looplength = length-2
    var kevin = Math.floor(Math.random() * characters.length);
    for (let i = 0; i < looplength; i++) {
        numb = Math.floor(Math.random() * characters.length);        
        kevin = kevin + characters[numb];
    }
    return kevin
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