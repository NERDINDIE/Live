// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const { registerUser, loginUser, verifyToken } = require('./auth');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const user = registerUser(username, password);
    res.status(200).send(user);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const result = loginUser(username, password);
    if (result.auth) {
        res.status(200).send(result);
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }
});

app.get('/', verifyToken, (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.use((socket, next) => {
    const token = socket.handshake.query.token;
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) return next(new Error('Authentication error'));
        socket.userId = decoded.id;
        next();
    });
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', { user: socket.userId, text: msg });
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
