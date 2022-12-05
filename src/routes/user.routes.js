const router = require('express').Router();
const userController = require('../controllers/user.controller');

const { validateToken } = require('../middlewares/validateToken');

const { validateDisplayName, 
  validateEmail, 
  validatePassword } = require('../middlewares/validateUser');

router
  .post('/user',
  validateToken,
  validateDisplayName,
  validateEmail,
  validatePassword, userController.create)
  .get('/user', validateToken, userController.getAll)
  .get('/user/:id', validateToken, userController.getById);