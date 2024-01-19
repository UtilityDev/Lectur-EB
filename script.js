let hostbtn = document.getElementById("host");
let joinbtn = document.getElementById("join");

let hosttext = document.getElementById("temptext");
let codefielddiv = document.getElementById("codefielddiv");

var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

hostbtn.addEventListener("click",function(){
    hostbtn.style.display = "none"
    joinbtn.style.display = "none"
    hosttext.style.display = "block"
})
joinbtn.addEventListener("click",function(){
    hostbtn.style.display = "none"
    joinbtn.style.display = "none"
    codefielddiv.style.display="block"
})

function randchar (length) {
    var looplength = length-1
    var kevin = Math.floor(Math.random() * characters.length);
    for (let i = 0; i < looplength; i++) {
        numb = Math.floor(Math.random() * characters.length);        
        kevin = kevin + characters[numb];
    }
    return kevin
}

document.getElementById("temptext").innerHTML = randchar(6);