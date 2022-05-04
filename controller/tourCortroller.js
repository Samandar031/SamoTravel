// const fs = require('fs');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
// );

// const getTours = (req, res) => {
//   console.log(req.time);

//   res.status(200).json({
//     status: 'Success',
//     message: 'hozircha ishlamaydi',
//   });
// };

// const getTour = (req, res) => {
//   console.log(req.time);
//   res.status(200).json({
//     status: 'Success',
//     message: 'hozircha ishlamaydi',
//   });
// };

// const postTours = (req, res) => {
//   console.log(req.time);

//   res.status(201).json({
//     status: 'Success',
//     message: 'hozircha ishlamaydi',
//   });
// };

// const patchTours = (req, res) => {
//   console.log(req.time);
//   res.status(200).json({
//     status: 'Success',
//     message: 'hozircha ishlamaydi',
//   });
// };

// const deleteTours = (req, res) => {
//   console.log(req.time);
//   res.status(204).json({
//     status: 'Success',
//     message: 'hozircha ishlamaydi',
//   });
// };

// module.exports = { getTours, postTours, getTour, deleteTours, patchTours };

// ///////////////////////////////////////////////////////

const { query } = require('express');
const Tour = require('../model/tourModel.js');

const getToursAll = async (req, res) => {
  try {
    console.log(query);
    ////////////////////////////////////
    const queryStr = JSON.stringify(query)
      .replace(/\bgte\b/g, '$gte')
      .replace(/\blte\b/g, '$lte')
      .replace(/\blt\b/g, '$lt')
      .replace(/\bgt\b/g, '$gt');

    const data = await Tour.find(JSON.parse(queryStr));
    // const data = await Tour.find({ price: { $gt: '1200' } });
    console.log(req.query);

    const removeQuery = ['sort', 'limit', 'page', 'feild'];

    if (data.length) {
      res.status(200).json({
        status: 'Success',
        results: data.length,
        data: {
          data,
        },
      });
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'There is not data',
    });
  }
};
const addTour = async (req, res) => {
  // assinxron funcsiya ishlatdikmmi try,catchni ishlatamiz
  try {
    // malumotni databasega yozish
    //1-usul
    // const tourModel = new Tour(req.body);
    // const data = await tourModel.save();
    // console.log(data);

    //2-usul
    const data = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      message: 'Invalid data',
    });
  }
};

const getTourItem = async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await Tour.findById(req.body.id);
    res.status(200).json({
      status: 'success',
      data: {
        data,
      },
    });
  } catch {
    res.status(404).json({
      message: 'Invalid data id',
    });
  }
};

const updateTour = async (req, res) => {
  try {
    const data = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: data,
    });
  } catch {
    res.status(404).json({
      status: 'Failed',
      message: 'Updated Error',
    });
  }
};

const deleteTour = async (req, res) => {
  try {
    const data = await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({
      data: data,
    });
  } catch {
    res.status(404).json({
      status: 'Failed',
      message: 'Updated Error',
    });
  }
};

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

module.exports = {
  getToursAll,
  addTour,
  updateTour,
  deleteTour,
  getTourItem,
};
