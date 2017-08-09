const User = require('../../../../models/user');

const getAllUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      const usersForResponse = users.map((user) => user.toSafeObject());
      res.json(usersForResponse);
    });
};

module.exports = getAllUsers;