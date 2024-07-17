const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Assume a function checkUserCredentials exists to validate user credentials
    if (checkUserCredentials(username, password)) {
        const token = jwt.sign({ username }, secretKey);
        res.json({ auth: true, token });
    } else {
        res.json({ auth: false });
    }
});

app.use((req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(403).send('No token provided.');

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) return res.status(500).send('Failed to authenticate token.');
        req.userId = decoded.id;
        next();
    });
});
