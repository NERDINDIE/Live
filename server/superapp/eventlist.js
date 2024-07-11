const express = require('express');
const app = express();

app.use(express.json());

app.get('/events', (req, res) => {
  res.json([/* list of events */]);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
