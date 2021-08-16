const chat = document.getElementById("chat")
const button = document.getElementById("button")
const input = document.getElementById("input")

button.addEventListener("click", sendMessage)
function sendMessage() {
    let msg = input.value;
    input.value = "";
    writeLine(msg)
}

input.addEventListener('keyup', function(e){ if(e.keyCode == 13) sendMessage() })

function writeLine(text) {
    const messageBody = document.createElement("section")
    messageBody.classList.add("message_section", "my_message")
    chat.append(messageBody)
    const messageDiv = document.createElement("div")
    messageDiv.classList.add("message_div")
    messageBody.append(messageDiv)
    const messageText = document.createElement("p")
    messageText.classList.add("message_text")
    messageText.innerHTML = text
    messageDiv.append(messageText)
    const profilePhoto = document.createElement("img")
    profilePhoto.src = "https://randomuser.me/api/portraits/lego/2.jpg"
    profilePhoto.classList.add("profile_photo")
    messageBody.append(profilePhoto)
}