const getUsers = (req, res) => {
  console.log(req.time);

  res.status(200).json({
    status: 'Success',
    message: 'hozircha ishlamaydi',
  });
};

const getUser = (req, res) => {
  console.log(req.time);
  res.status(200).json({
    status: 'Success',
    message: 'hozircha ishlamaydi',
  });
};

const postUsers = (req, res) => {
  console.log(req.time);

  res.status(201).json({
    status: 'Success',
    message: 'hozircha ishlamaydi',
  });
};

const patchUsers = (req, res) => {
  console.log(req.time);
  res.status(200).json({
    status: 'Success',
    message: 'hozircha ishlamaydi',
  });
};

const deleteUsers = (req, res) => {
  console.log(req.time);
  res.status(204).json({
    status: 'Success',
    message: 'hozircha ishlamaydi',
  });
};

module.exports = { getUser, getUsers, postUsers, deleteUsers, patchUsers };
