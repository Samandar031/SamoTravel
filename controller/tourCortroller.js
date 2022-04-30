const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

const getTours = (req, res) => {
  console.log(req.time);

  res.status(200).json({
    status: 'Success',
    message: 'hozircha ishlamaydi',
  });
};

const getTour = (req, res) => {
  console.log(req.time);
  res.status(200).json({
    status: 'Success',
    message: 'hozircha ishlamaydi',
  });
};

const postTours = (req, res) => {
  console.log(req.time);

  res.status(201).json({
    status: 'Success',
    message: 'hozircha ishlamaydi',
  });
};

const patchTours = (req, res) => {
  console.log(req.time);
  res.status(200).json({
    status: 'Success',
    message: 'hozircha ishlamaydi',
  });
};

const deleteTours = (req, res) => {
  console.log(req.time);
  res.status(204).json({
    status: 'Success',
    message: 'hozircha ishlamaydi',
  });
};

module.exports = { getTours, postTours, getTour, deleteTours, patchTours };
