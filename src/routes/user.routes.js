const router = require('express').Router();
const userController = require('../controllers/user.controller');

const { validateToken } = require('../middlewares/validateToken');

const { validateDisplayName, 
  validateEmail, 
  validatePassword } = require('../middlewares/validateUser');

router
  .post('/',
  validateDisplayName,
  validateEmail,
  validatePassword, userController.create)
  .get('/', validateToken, userController.getAll)
  .get('/:id', validateToken, userController.getById)
  .delete('/me', validateToken, userController.exclude);

module.exports = router;