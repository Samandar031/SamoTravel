const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    name: 'Umid',
    age: 20,
  });
});

const port = 8003;
app.listen(port, '127.0.0.1');
