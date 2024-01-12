let hostbtn = document.getElementById("host");
let joinbtn = document.getElementById("join");

let hosttext = document.getElementById("temptext");
let codefielddiv = document.getElementById("codefielddiv");

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