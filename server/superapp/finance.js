const express = require('express');
const app = express();

app.use(express.json());

app.get('/financial-services/accounts', (req, res) => {
  res.json([/* list of accounts */]);
});

app.post('/financial-services/transfer', (req, res) => {
  const { fromAccount, toAccount, amount } = req.body;
  // Process transfer
  res.json({ success: true, transactionId: 'abcde' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
