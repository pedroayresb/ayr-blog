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

const search = async (req, res) => {
  const { q } = req.query;
  const posts = await postService.search(q);
  res.status(200).json(posts);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.user.id;
  
  const post = await postService.update(id, title, content, userId);
  if (post === 'access denied') {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  res.status(200).json(post);
};

const exclude = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const post = await postService.exclude(id, userId);
  if (post === 'access denied') {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  res.status(204).json();
};

module.exports = {
  create,
  getAll,
  getById,
  search,
  update,
  exclude,
};
