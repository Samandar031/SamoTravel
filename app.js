const express = require('express');
const fs = require('fs');
const { regexpToText } = require('nodemon/lib/utils');
const app = express();
const morgan = require('morgan');

const usersRouter = require('./router/userRouter.js');
const tourRouter = require('./router/tourRouter.js');

app.use(express.json()); //qorovulcha

app.use(morgan('common'));

const port = 8003;
app.listen(port, '127.0.0.1');
