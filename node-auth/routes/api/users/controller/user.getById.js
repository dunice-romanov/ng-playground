const User = require('../../../../models/user');

const findUserById = (req, res, next) => {
  const { userId } = req.params;

  if (!userId) { res.status(400).json({error: 'Provide user id'})}

  User.findById(userId)
    .then((user) => {
      if (!user) { return res.status(400).json({error: 'User not found'})}
      const safeUser = user.toSafeObject();
      
      res.json(safeUser);
    })

}

module.exports = findUserById;