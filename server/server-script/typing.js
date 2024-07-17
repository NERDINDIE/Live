// Typing indicator
socket.on('typing', (isTyping) => {
    socket.broadcast.emit('typing', { user: socket.username, isTyping });
});
