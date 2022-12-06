const categoriesService = require('../services/categories.services');

const validateTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateContent = (req, res, next) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  const categories = await categoriesService.getAll();

  const categoriesIds = categories.map(({ id }) => id);

  const isValid = categoryIds.every((id) => categoriesIds.includes(id));

  if (!isValid) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategoryId,
};
