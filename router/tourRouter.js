const { json } = require('express/lib/response');
const express = require('express');

const tourCountroller = require('../controller/tourCortroller.js');

const tourRouter = express.Router();

tourRouter
  .route('/')
  .get(tourCountroller.getTours)
  .post(tourCountroller.postTours);
tourRouter
  .route('/:id')
  .get(tourCountroller.getTour)
  .patch(tourCountroller.patchTours)
  .delete(tourCountroller.deleteTours);
