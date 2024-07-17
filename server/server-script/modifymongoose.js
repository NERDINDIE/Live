// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { registerUser, loginUser, verifyToken } = require('./auth');
const User = require('./models/User');
const Message = require('./models/Message');

mongoose.connect('mongodb://localhost/chat-app', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password: bcrypt.hashSync(password, 8) });
    user.save().then(() => res.status(200).send({ username }));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }).then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ id: user.username }, 'secretkey', { expiresIn: '1h' });
            res.status(200).send({ auth: true, token });
        } else {
            res.status(401).send({ message: 'Invalid credentials' });
        }
    });
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
        const message = new Message({ user: socket.userId, text: msg });
        message.save().then(() => {
            io.emit('chat message', { user: socket.userId, text: msg });
        });
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
