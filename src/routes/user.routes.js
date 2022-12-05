const router = require('express').Router();
const userController = require('../controllers/user.controller');

const { validateDisplayName, 
  validateEmail, 
  validatePassword } = require('../middlewares/validateUser');

router
  .post('/user', validateDisplayName, validateEmail, validatePassword, userController.create)
  .get('/user', userController.getAll)
  .get('/user/:id', userController.getById);