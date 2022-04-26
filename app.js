const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json()); //qorovulcha

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, {
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

app.post(`/api/v1/tours`, (req, res) => {
  const data = req.body;
  const newId = tours[tours.length - 1].id + 1;

  const complateObj = Object.assign({ id: newId }, data);

  tours.push(complateObj);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours.json`,
    JSON.stringify(tours),
    'utf-8',
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: tours,
        },
      });
    }
  );
});

app.get('/api/v1/tours/:id', (req, res) => {
  const id = +req.params.id;
  const data = tours.find((val) => val.id === id);

  console.log(tours);
  res.status(200).json({
    status: 'success',
    data: {
      data,
    },
  });
});

app.patch('/api/v1/tours/:id', (req, res) => {
  const id = +req.params.id;
  const data = tours.find((val) => val.id === id);

  if (data) {
    res.status(200).json({
      status: 'success',
      data: 'topdim',
    });
  } else if (!data) {
    res.status(404).json({
      status: 'success',
      data: 'topolmadim',
    });
  }
});

app.delete('/api/v1/tours/:id', (req, res) => {
  const id = +req.params.id;
  const arr = tours.filter((val) => val.id !== id);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(arr),
    'utf-8',
    (err) => {
      res.status(204).json({
        status: 'success',
        data: 'malumot ochirildi',
      });
    }
  );
});

const port = 8003;
app.listen(port, '127.0.0.1');
