const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/magazine-maker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
