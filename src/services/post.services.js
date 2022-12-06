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

module.exports = {
  create,
  getAll,
  getById,
};
