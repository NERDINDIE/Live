io.on('connection', (socket) => {
    console.log('a user connected');

    // Send all previous messages to the connected user
    Message.find().then(messages => {
        socket.emit('previous messages', messages);
    });

    socket.on('chat message', (msg) => {
        const message = new Message({ user: socket.userId, text: msg });
        message.save().then((savedMessage) => {
            io.emit('chat message', { id: savedMessage._id, user: socket.userId, text: msg, read: false });
        });
    });

    socket.on('message read', (msgId) => {
        Message.findByIdAndUpdate(msgId, { read: true }).then(() => {
            io.emit('message read', msgId);
        });
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
