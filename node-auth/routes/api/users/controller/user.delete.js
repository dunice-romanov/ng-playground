const User = require('../../../../models/user');

const deleteUser = (req, res, next) => {
  const { userId } = req.params;

  if (!userId) { return res.status(400).json({error: 'Provide user id'}); }

  User.findByIdAndRemove(userId)
    .then((user) => {
      if (!user) { return res.status(400).json({error: 'Nothing was removed'}) }
      res.json(user.toSafeObject())
    })
    .catch((error) => {
      res.status(400).json({
        error: error.toString(),
      });
    });

}

module.exports = deleteUser;