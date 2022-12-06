const postService = require('../services/post.services');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const post = await postService.create(title, content, id, categoryIds);

  res.status(201).json(post);
};

const getAll = async (_req, res) => {
  const posts = await postService.getAll();
  res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const [post] = await postService.getById(id);
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  res.status(200).json(post);
};

module.exports = {
  create,
  getAll,
  getById,
};
