const express = require('express');

const router = require('express').Router();

const app = express();
app.use(express.json());
const userController = require('../controllers/user.controller');

const validateToken = require('../middlewares/validateToken');

app.use(validateToken);

router
  .post('/user', userController.create)
  .get('/user', userController.getAll)
  .get('/user/:id', userController.getById);