// models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    type: String, // movie, concert, play, etc.
    name: String,
    date: Date,
    location: String
});

module.exports = mongoose.model('Event', eventSchema);

// server.js (additional route)
const Event = require('./models/Event');

app.get('/events', (req, res) => {
    Event.find().then(events => res.status(200).send(events));
});
