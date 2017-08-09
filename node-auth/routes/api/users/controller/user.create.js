const User = require('../../../../models/user');
const MONGO_ERRORS = require('../../../../constants').MONGO_ERRORS;

const createUser = (req, res, next) => {
  
  const { password, username } = req.body;

  if (!password || !username) { res.status(400).json({ error: 'You should enter login and password'}) }

  User.create({
    username,
    password,
  })
  .then((user) => {
    res.json(user.toSafeObject());
  })
  .catch((error) => {
    console.log(error.code);
    switch (error.code) {
      case MONGO_ERRORS.DUPLICATE_ERROR:
        res.status(400).json({error: 'User already created'});
        break;
      default:
        console.log(error);
        res.status(500).json({error: 'Something goes wrong'});
    }
  })
};

module.exports = createUser;