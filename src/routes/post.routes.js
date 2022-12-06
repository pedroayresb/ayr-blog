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
  .get('/search', validateToken, postController.search)
  .get('/:id', validateToken, postController.getById)
  .put('/:id',
  validateToken,
  validateTitle,
  validateContent,
  postController.update)
  .delete('/:id', validateToken, postController.exclude);

module.exports = router;