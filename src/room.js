/* Room.js */
// Client-side room handling.

let codeText = document.querySelector(".room_code");
let nickText = document.querySelector(".nick_text");
let roomCodeText = document.querySelector(".room_code");

const urlParams = new URLSearchParams(window.location.search);

const roomCode = urlParams.get("code");
const nick = urlParams.get("nick");

// Write room code to clipboard
roomCodeText.addEventListener("click", function () {
    navigator.clipboard.writeText(roomCodeText.innerText);    
    alert("Code copied to clipboard!");
});

const DOMRefresh = () => {
    codeText.textContent = roomCode;
    nickText.textContent = nick;
}

DOMRefresh();