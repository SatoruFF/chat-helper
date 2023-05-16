import axios from "axios";

const message = document.querySelector('.message');
const sendButton = document.querySelector('.send-btn');
const inputMessage = document.querySelector('.message-input');

let questions = []
let answer = []

sendButton.addEventListener('click', () => {
    if (inputMessage.value.length > 0) {
        sendMessage(inputMessage.value)
    }
})

function sendMessage(val) {
    questions.push(val)
    const newMessage = document.createElement('div');
    newMessage.classList.add('question');
    newMessage.textContent = val
    message.appendChild(newMessage)
    inputMessage.value = ''
}

function getQuestion() {

}