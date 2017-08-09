const passport = require('passport'),
      JWTStrategy = require('passport-jwt');

const JWT_SECRET = require('../constants').JWT_SECRET,
      User = require('../models/user');

const jwtOptions = {
  jwtFromRequest: JWTStrategy.ExtractJwt.fromAuthHeader(),
  secretOrKey: JWT_SECRET,
};

//TODO: complete jwt function
passport.use(new JWTStrategy.Strategy(jwtOptions, (payload, done) => {
  console.log('payload', payload);
  return done(null, {user: 'hi'});
}));

module.exports = passport;