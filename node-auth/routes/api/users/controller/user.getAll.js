const User = require('../../../../models/user');

const getAllUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      const usersForResponse = users.map((user) => user.toSafeObject());
      res.json(usersForResponse);
    })
    .catch((error) => {
      console.log('User findAll error', error);
      res.status(400).json({error: 'Error finding users'});
    });
};

module.exports = getAllUsers;