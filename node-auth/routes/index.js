const express = require('express');
const router = express.Router();

const passport = require('../middlewares/passport');

/* GET home page. */
router.get('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
  res.send('nothing');
});

router.use('/api', require('./api'));

module.exports = router;
