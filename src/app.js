
const express = require('express');
const path = require('path');

const app = express();
const { PORT = 3000 } = process.env;

const distPath = path.join(__dirname, '../', 'dist');

app.use(express.static(distPath));
// app.get(`/`, (req, res) => {
//   res.status(200).send('Hello, World!');
// });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});