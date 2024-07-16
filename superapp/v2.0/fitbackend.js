const express = require('express');
const app = express();
app.use(express.json());

let fitnessLog = [];
let events = [
    { name: 'Yoga Class', date: '2023-07-20', location: 'Local Gym' },
    { name: 'Healthy Eating Seminar', date: '2023-07-25', location: 'Community Center' },
    { name: '5K Run', date: '2023-08-01', location: 'City Park' }
];

// Endpoint to add fitness log entry
app.post('/fitness', (req, res) => {
    const { exercise, duration } = req.body;
    fitnessLog.push({ exercise, duration });
    res.status(201).send({ success: true });
});

// Endpoint to get fitness log
app.get('/fitness', (req, res) => {
    res.send(fitnessLog);
});

// Endpoint to get events
app.get('/events', (req, res) => {
    res.send(events);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
