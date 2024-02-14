/* Room.js */
// Client-side room handling.

let codeText = document.querySelector(".room_code");
let nickText = document.querySelector(".nick_text");

const urlParams = new URLSearchParams(window.location.search);

const roomCode = urlParams.get("code");
const nick = urlParams.get("nick");

const DOMRefresh = () => {
    codeText.textContent = roomCode;
    nickText.textContent = nick;
}

DOMRefresh();