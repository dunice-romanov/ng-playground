const router = require('express').Router(),
      passport = require('../../../middlewares/passport');

const controller = require('./controller');

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAllTodos);
router.post('/', passport.authenticate('jwt', {session: false}), controller.createTodo);

module.exports = router;