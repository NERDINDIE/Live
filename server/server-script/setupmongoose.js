// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String
});

module.exports = mongoose.model('User', userSchema);

// models/Message.js
const messageSchema = new mongoose.Schema({
    user: String,
    text: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);
