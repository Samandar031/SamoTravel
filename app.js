const express = require('express');
const fs = require('fs');
const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`, {
    encoding: 'utf-8',
  })
);

const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/reviews.json`, {
    encoding: 'utf-8',
  })
);

// console.log(tours);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: {
      tours,
    },
  });
});

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: {
      reviews,
    },
  });
});

const port = 8003;
app.listen(port, '127.0.0.1');
