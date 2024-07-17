// models/FriendRequest.js
const mongoose = require('mongoose');

const friendRequestSchema = new mongoose.Schema({
    from: String,
    to: String,
    status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('FriendRequest', friendRequestSchema);

// server.js (additional routes)
const FriendRequest = require('./models/FriendRequest');

app.post('/send-friend-request', verifyToken, (req, res) => {
    const friendRequest = new FriendRequest({ from: req.userId, to: req.body.to });
    friendRequest.save().then(() => res.status(200).send({ message: 'Friend request sent' }));
});

app.post('/accept-friend-request', verifyToken, (req, res) => {
    FriendRequest.findOneAndUpdate(
        { from: req.body.from, to: req.userId, status: 'pending' },
        { status: 'accepted' }
    ).then(() => res.status(200).send({ message: 'Friend request accepted' }));
});

app.get('/friends', verifyToken, (req, res) => {
    FriendRequest.find({ to: req.userId, status: 'accepted' })
        .then(friendRequests => {
            const friends = friendRequests.map(fr => fr.from);
            res.status(200).send(friends);
        });
});
