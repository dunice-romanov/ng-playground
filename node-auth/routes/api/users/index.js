const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.findAllUsers);
router.get('/:userId', controller.findUserById);

router.post('/', controller.createUser);
router.post('/login', controller.loginUser);

router.delete('/:userId', controller.deleteUser);

module.exports = router;