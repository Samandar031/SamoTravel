const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json()); //qorovulcha

const magic = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/magic-soft-big.json`, 'utf-8')
);

app.get('/api/v1/magic', (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: {
      magic,
    },
  });
});

console.log(typeof magic);
app.post(`/api/v1/magic`, (req, res) => {
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
});

// app.get('/api/v1/magic/:id', (req, res) => {
//   const id = +req.params.id;
//   const data = magic.find((val) => val.id === id);

//   console.log(magic);
//   res.status(200).json({
//     status: 'success',
//     data: {
//       data,
//     },
//   });
// });

// app.patch('/api/v1/magic/:id', (req, res) => {
//   const id = +req.params.id;
//   const data = magic.find((val) => val.id === id);

//   if (data) {
//     res.status(200).json({
//       status: 'success',
//       data: 'topdim',
//     });
//   } else if (!data) {
//     res.status(404).json({
//       status: 'success',
//       data: 'topolmadim',
//     });
//   }
// });

// app.delete('/api/v1/magic/:id', (req, res) => {
//   const id = +req.params.id;
//   const arr = magic.filter((val) => val.id != id);

//   fs.writeFile(
//     `${__dirname}/dev-data/data/magic-simple.json`,
//     JSON.stringify(arr),
//     'utf-8',
//     (err) => {
//       res.status(204).json({
//         status: 'success',
//         data: 'malumot ochirildi',
//       });
//     }
//   );
// });

const port = 8003;
app.listen(port, '127.0.0.1');
