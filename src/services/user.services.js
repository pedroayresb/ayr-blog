const { User } = require('../models');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || password !== user.password) {
    return null;
  }

  return user;
};

const create = async (displayName, email, password, image) => {
  const hasUser = await User.findOne({ where: { email } });

  if (hasUser) {
    return null;
  }

  const user = await User.create({ displayName, email, password, image });
  return user;
};

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id } });
  return user;
};

module.exports = {
  login,
  create,
  getAll,
  getById,
};