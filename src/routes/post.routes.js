const router = require('express').Router();

const postController = require('../controllers/post.controller');

const { validateToken } = require('../middlewares/validateToken');

const { validateTitle,
  validateContent,
  validateCategoryId } = require('../middlewares/validatePost');

router
  .post('/',
  validateToken,
  validateTitle,
  validateContent,
  validateCategoryId, postController.create)
  .get('/', validateToken, postController.getAll)
  .get('/:id', validateToken, postController.getById);

module.exports = router;