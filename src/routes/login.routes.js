const router = require('express').Router();
const userController = require('../controllers/user.controller');

const { loginValidate } = require('../middlewares/loginValidate');

router
  .post('/', loginValidate, userController.login);

module.exports = router;