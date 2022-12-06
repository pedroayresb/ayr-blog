const categoriesService = require('../services/categories.services');

const create = async (req, res) => {
  const { name } = req.body;
  const category = await categoriesService.create(name);

  res.status(201).json(category);
};

const getAll = async (_req, res) => {
  const categories = await categoriesService.getAll();
  res.status(200).json(categories);
};

module.exports = {
  create,
  getAll,
};
