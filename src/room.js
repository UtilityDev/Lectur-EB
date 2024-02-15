/* Room.js */
// Client-side room handling.

let codeText = document.querySelector(".room_code");
let nickText = document.querySelector(".nick_text");
let roomCodeText = document.querySelector(".room_code");

const urlParams = new URLSearchParams(window.location.search);

const roomCode = urlParams.get("code");
const nick = urlParams.get("nick");

$(".code-copy").on("click", function () {
    navigator.clipboard.writeText(roomCodeText.innerText);
    swal("Code copied to clipboard!", "Now you can share it with your students.");
});

// When the leave chevron is pressed
$(".leave_icon").on("click", function () {
    $.ajax({
        type: "POST",
        url: "room.php",
        data: "LEAVE",
    });
    // window.location = "../index.php";
});

const DOMRefresh = () => {
    codeText.textContent = roomCode;
    nickText.textContent = nick;
}

DOMRefresh();