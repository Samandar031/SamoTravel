// const { json } = require('express/lib/response');
// const express = require('express');

// const tourCountroller = require('../controller/tourCortroller.js');

// const tourRouter = express.Router();

// tourRouter
//   .route('/')
//   .get(tourCountroller.getTours)
//   .post(tourCountroller.postTours);
// tourRouter
//   .route('/:id')
//   .get(tourCountroller.getTour)
//   .patch(tourCountroller.patchTours)
//   .delete(tourCountroller.deleteTours);
// //////////////////////////////////////////////

const express = require('express');
const tourController = require('../controller/tourController');

const tourRouter = express.Router();

// tourRouter.param('id', tourController.checkId);

tourRouter
  .route('/')
  .get(tourController.getToursAll)
  .post(tourController.addTour);

tourRouter
  .route('/:id')
  .delete(tourController.deleteTour)
  .get(tourController.getTourItem)
  .patch(tourController.updateTour);

module.exports = tourRouter;
