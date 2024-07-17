// In-memory store for user statuses (could be replaced with Redis for scalability)
let userStatuses = {};

io.on('connection', (socket) => {
    const userId = socket.userId;
    userStatuses[userId] = 'online';
    io.emit('user status', { userId, status: 'online' });

    socket.on('disconnect', () => {
        userStatuses[userId] = 'offline';
        io.emit('user status', { userId, status: 'offline' });
    });
});
