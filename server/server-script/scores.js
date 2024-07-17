const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gamedb', { useNewUrlParser: true });

const Score = mongoose.model('Score', { username: String, score: Number });

app.use(bodyParser.json());

app.post('/submit-score', (req, res) => {
    const { username, score } = req.body;
    const newScore = new Score({ username, score });
    newScore.save().then(() => res.send('Score saved'));
});

app.get('/leaderboard', (req, res) => {
    Score.find().sort({ score: -1 }).limit(10).exec((err, scores) => {
        res.json(scores);
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
