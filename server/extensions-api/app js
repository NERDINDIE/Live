const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const extensionsRouter = require('./routes/extensions');

app.use(cors());
app.use(express.json());
app.use('/extensions', extensionsRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
