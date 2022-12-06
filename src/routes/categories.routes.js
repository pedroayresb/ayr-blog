const router = require('express').Router();
const categoriesController = require('../controllers/categories.controller');

const { validateToken } = require('../middlewares/validateToken');
const { validateCategoryName } = require('../middlewares/validateCategory.js');

router
  .post('/', validateToken, validateCategoryName, categoriesController.create)
  .get('/', validateToken, categoriesController.getAll);

module.exports = router;