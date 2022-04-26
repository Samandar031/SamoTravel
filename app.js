const express = require('express');
const fs = require('fs');
const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`, {
    encoding: 'utf-8',
  })
);

// console.log(tours);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: {
      tours,
    },
  });
});

const port = 8003;
app.listen(port, '127.0.0.1');
