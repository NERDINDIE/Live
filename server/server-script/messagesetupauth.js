// auth.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = []; // This should be replaced with a database in a real application

const registerUser = (username, password) => {
    const hashedPassword = bcrypt.hashSync(password, 8);
    users.push({ username, password: hashedPassword });
    return { username };
};

const loginUser = (username, password) => {
    const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.username }, 'secretkey', { expiresIn: '1h' });
        return { auth: true, token };
    } else {
        return { auth: false, token: null };
    }
};

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        req.userId = decoded.id;
        next();
    });
};

module.exports = { registerUser, loginUser, verifyToken };
