const socket = io();

socket.on('message', function(msg) {
    const messages = document.getElementById('messages');
    const msgElem = document.createElement('div');
    msgElem.textContent = msg;
    messages.appendChild(msgElem);
    messages.scrollTop = messages.scrollHeight;
});

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value;
    if (message.trim() !== '') {
        socket.send(message);
        input.value = '';
    }
}
