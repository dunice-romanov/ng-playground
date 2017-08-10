const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../../../../constants').JWT_SECRET,
      JWT_EXPIRE_TIME = require('../../../../constants').JWT_EXPIRE_TIME;

const User = require('../../../../models/user');

const loginUser = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) { return res.status(400).json({error: 'Provide username and password'}); }

  User.findOne({ username: username })
    .then((user) => {
      if (!user) { 
        return res.status(404).json({error: 'User not found'}); 
      }
      if (!user.checkPassword(password)) {
        return res.status(400).json({error: 'Password doesn\'t match'})
      }
      const safeUser = user.toSafeObject(), 
            token = jwt.sign(user.toSafeObject(), JWT_SECRET, {
              expiresIn: JWT_EXPIRE_TIME,
            });

      res.json({
        user: safeUser,
        token: `JWT ${token}`,
      })
    })
    .catch((error) => {
      res.status(400).json('Something goes wrong');
    })

}

module.exports = loginUser;