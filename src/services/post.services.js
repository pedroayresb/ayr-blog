const { Op } = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');

const createPostCategory = async (postId, categoryId) => {
  await Promise.all(categoryId.map(async (element) => {
    await PostCategory.create({ postId, categoryId: element });
  }));
};

const create = async (title, content, userId, categoryIds) => {
  const post = await BlogPost.create({ 
    title, 
    content, 
    userId,
    updated: new Date(),
    published: new Date(),
  });

  await createPostCategory(post.dataValues.id, categoryIds);

  return post;
};

const getAll = async () => {
  const posts = await BlogPost.findAll(
    { include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] },
  );

  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findAll(
    { where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] },
  );
  return post;
};

const update = async (id, title, content, userId) => {
  if (Number(id) !== Number(userId)) return 'access denied';

  await BlogPost.update({ 
    title,
    content,
    updated: new Date() }, 
    { where: { id },
  });
  const [updatedPost] = await getById(userId);
  return updatedPost;
};

const exclude = async (id, userId) => {
  const [post] = await getById(id);
  if (!post) return null;
  if (Number(post.dataValues.userId) !== Number(userId)) return 'access denied';

  await BlogPost.destroy({ where: { id } });
  return post;
};

const search = async (q) => {
  if (!q) {
    return getAll();
  }

  const posts = await BlogPost.findAll(
    { where: { [Op.or]: [
      { title: { [Op.like]: `%${q}%` } },
      { content: { [Op.like]: `%${q}%` } },
    ] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] },
  );

  return posts;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
  search,
};
