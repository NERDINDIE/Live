const io = require('socket.io')(http);

io.on('connection', (socket) => {
    socket.on('join room', (room) => {
        socket.join(room);
        socket.to(room).emit('new player', socket.id);
    });

    socket.on('move', (data) => {
        socket.to(data.room).emit('move', data);
    });
});
