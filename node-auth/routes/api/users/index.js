const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.findAllUsers);
router.get('/:userId', controller.findUserById);
router.post('/register', controller.createUser);
router.delete('/:userId', controller.deleteUser);

module.exports = router;