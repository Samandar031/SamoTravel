const express = require('express');
const fs = require('fs');
const { regexpToText } = require('nodemon/lib/utils');
const app = express();
const morgan = require('morgan');

app.use(express.json()); //qorovulcha

app.use(morgan('common'));

app.use((req, res, next) => {
  if (req) {
    req.time = Date.now();
  }
  if (res) {
    res.time = Date.now();
  }
  next();
});

app.use((req, res, next) => {
  next();
});

const magic = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/magic-soft-big.json`, 'utf-8')
);

const magicClone = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/magicClone.json`, 'utf-8')
);

// const getTour = (req, res) => {
//   console.log(req.time);

//   res.status(200).json({
//     status: 'Success',
//     time: req.time,
//     timel: res.time,
//     data: {
//       magic,
//     },
//   });
// };

const postTour = (req, res) => {
  const data = req.body;
  const yangiId = magic[magic.length - 1].id + 1;

  const qoshadiganId = Object.assign({ id: yangiId }, data);
  magic.push(qoshadiganId);

  fs.writeFile(
    `${__dirname}/dev-data/data/magic-soft.json`,
    JSON.stringify(magic),
    'utf-8',
    (err) => {
      res.status(201).json({
        status: 'success',

        data: {
          tour: magic,
        },
      });
    }
  );
};

const updataTour = (req, res) => {
  const data = req.body;
  const dataId = +req.body.id;

  const Bor = magic.some((val) => {
    return val.id == dataId;
  });

  if (Bor) {
    const joyi = magic.findIndex((val) => {
      return val.id == dataId;
    });

    pupils.splice(joyi, 1);
    console.log(magic);
    magic.push(data);

    fs.writeFile(
      `
      ${__dirname}/dev-data/data/magic-soft.json`,
      JSON.stringify(magic),
      'utf-8',
      (err) => {
        res.status(200).json({
          status: 'succes',

          data: {
            magic,
          },
        });
      }
    );
  } else {
    const data = req.body;
    const yangiId = magic[magic.length - 1].id + 1;

    const qoshadiganId = Object.assign({ id: yangiId }, data);
    magic.push(qoshadiganId);

    fs.writeFile(
      `${__dirname}/dev-data/data/magic-soft.json`,
      JSON.stringify(magic),
      'utf-8',
      (err) => {
        res.status(201).json({
          status: 'success',
          data: {
            tour: magic,
          },
        });
      }
    );
  }
};

const getF = (req, res) => {
  const id = +req.params.id;
  const data = magic.find((val) => val.id == id);

  res.status(200).json({
    status: 'success',
    data: {
      data,
    },
  });
};

const getFunc = (req, res) => {
  const id = +req.params.id;
  const data = magic.find((val) => val.id == id);

  res.status(200).json({
    status: 'success',
    data: {
      data,
    },
  });
};

const patchTour = (req, res) => {
  const id = +req.params.id;
  const data = magic.find((val) => val.id == id);

  if (data) {
    res.status(200).json({
      status: 'succes',
      data: 'topdim',
    });
  } else if (!data) {
    res.status(404).json({
      status: 'succes',
      data: 'topolmadim',
    });
  }
};

const deleteTour = (req, res) => {
  const id = +req.params.id;
  const number = magic.filter((val) => val.id != id);

  fs.writeFile(
    `${__dirname}/dev-data/data/magic-soft.json`,
    JSON.stringify(number),
    'utf-8',
    (err) => {
      res.status(204).json({
        status: 'success',
        data: 'malumot ochirildi',
      });
    }
  );
};

// app.get('/api/v1/magic', getTour);
// app.post(`/api/v1/magic`, postTour);
app.post('/api/v1/magic/:id', updataTour);

app.get('/api/v1/magic', getTour);

app.patch('/api/v1/magic/:id', patchTour);
app.delete('/api/v1/magic/:id', deleteTour);
app.post('/api/v1/magic').post(postTour);

app.route('/api/v1/magic').get(getTour);

app
  .route('/api/v1/magic/:id')
  .delete(deleteTour)
  .patch(patchTour)
  .get(getF)
  .post(updataTour);

// //////////////////////////////////////////////////////////////////////////////////////

const port = 8003;
app.listen(port, '127.0.0.1');
