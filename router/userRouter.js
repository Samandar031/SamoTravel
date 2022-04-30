const express = require('express');
const fs = require('fs');
const { regexpToText } = require('nodemon/lib/utils');
const app = express();

const userController = require('../controller/userController.js');

// users route
const usersRouter = express.Router();

usersRouter
  .route('/')
  .get(userController.getUsers)
  .post(userController.postUsers);
usersRouter
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.patchUsers)
  .delete(userController.deleteUsers);

app.use('/api/v1/users', usersRouter);
// //////////////////////////////////////////////////////////////////////////////////////
