const express = require('express');
const fs = require('fs');
const app = express();

const PORT = 8002;
const pack = fs.readFileSync('./package-lock.json', 'utf-8');
app.get('/', (req, res) => {
  res.send(pack);
  console.log('sizda hammasi ishladi');
});

app.listen(PORT, '127.0.0.1');

// const getTours = (req, res) => {
//   console.log(req.time);

//   res.status(200).json({
//     status: 'Success',
//     time: req.time,
//     timel: res.time,
//     data: {
//       tours,
//     },
//   });
// };

// const postTours = (req, res) => {
//   const data = req.body;
//   const yangiId = tours[tours.length - 1].id + 1;

//   const qoshadiganId = Object.assign({ id: yangiId }, data);
//   tours.push(qoshadiganId);

//   // fs.writeFile(
//   //   `${__dirname}/dev-data/data/tours-soft.json`,
//   //   JSON.stringify(tours),
//   //   'utf-8',
//   //   (err) => {
//   //     res.status(201).json({
//   //       status: 'success',

//   //       data: {
//   //         tour: tours,
//   //       },
//   //     });
//   //   }
//   // );
// };

// const patchTours = (req, res) => {
//   const data = req.body;
//   const dataId = +req.body.id;

//   const Bor = tours.some((val) => {
//     return val.id == dataId;
//   });

//   if (Bor) {
//     const joyi = tours.findIndex((val) => {
//       return val.id == dataId;
//     });

//     pupils.splice(joyi, 1);
//     console.log(tours);
//     tours.push(data);

//     fs.writeFile(
//       `
//       ${__dirname}/dev-data/data/tours-soft.json`,
//       JSON.stringify(tours),
//       'utf-8',
//       (err) => {
//         res.status(200).json({
//           status: 'succes',

//           data: {
//             tours,
//           },
//         });
//       }
//     );
//   } else {
//     const data = req.body;
//     const yangiId = tours[tours.length - 1].id + 1;

//     const qoshadiganId = Object.assign({ id: yangiId }, data);
//     tours.push(qoshadiganId);

//     fs.writeFile(
//       `${__dirname}/dev-data/data/tours-soft.json`,
//       JSON.stringify(tours),
//       'utf-8',
//       (err) => {
//         res.status(201).json({
//           status: 'success',
//           data: {
//             tour: tours,
//           },
//         });
//       }
//     );
//   }
// };

// const getTour = (req, res) => {
//   const id = +req.params.id;
//   const data = tours.find((val) => val.id == id);

//   res.status(200).json({
//     status: 'success',
//     data: {
//       data,
//     },
//   });
// };

// const patchTour = (req, res) => {
//   const id = +req.params.id;
//   const data = tours.find((val) => val.id == id);

//   if (data) {
//     res.status(200).json({
//       status: 'succes',
//       data: 'topdim',
//     });
//   } else if (!data) {
//     res.status(404).json({
//       status: 'succes',
//       data: 'topolmadim',
//     });
//   }
// };

// const deleteTours = (req, res) => {
//   const id = +req.params.id;
//   const number = tours.filter((val) => val.id != id);

//   fs.writeFile(
//     `${__dirname}/../dev-data/data/tours-soft.json`,
//     JSON.stringify(number),
//     'utf-8',
//     (err) => {
//       res.status(204).json({
//         status: 'success',
//         data: 'malumot ochirildi',
//       });
//     }
//   );
// };
