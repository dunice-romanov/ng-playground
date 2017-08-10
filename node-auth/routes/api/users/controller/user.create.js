const jwt = require('jsonwebtoken');

const User = require('../../../../models/user');
const constants = require('../../../../constants'),
      MONGO_ERRORS = constants.MONGO_ERRORS,
      JWT_SECRET = constants.JWT_SECRET,
      JWT_EXPIRE_TIME = constants.JWT_EXPIRE_TIME;

const createUser = (req, res, next) => {
  const { password, username } = req.body;

  if (!password || !username) { 
    return res.status(400).json({
     error: 'You should enter login and password'
    })
  }

  User.create({
    username,
    password,
  })
  .then((user) => {
    const safeUser = user.toSafeObject(),
          token = jwt.sign(safeUser, JWT_SECRET, { expiresIn: JWT_EXPIRE_TIME });
    res.json({
      user: safeUser,
      token: `JWT ${token}`,
    })
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