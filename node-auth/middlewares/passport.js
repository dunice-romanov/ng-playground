const passport = require('passport'),
      JWTStrategy = require('passport-jwt');

const JWT_SECRET = require('../constants').JWT_SECRET,
      User = require('../models/user');

const jwtOptions = {
  jwtFromRequest: JWTStrategy.ExtractJwt.fromAuthHeader(),
  secretOrKey: JWT_SECRET,
};

passport.use(new JWTStrategy.Strategy(jwtOptions, (payload, done) => {
  const { id } = payload;
  if (!id) { return done(null, false); }
  User.findById(payload.id)
    .then((user) => {
      if (user) { return done(null, user); }
      return done(null, false);
    })
    .catch((error) => {
      console.log('JWTStrategy error', error);
      return done(error);
    });
}));

module.exports = passport;