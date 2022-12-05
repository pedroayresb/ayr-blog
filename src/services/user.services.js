const userModel = require('../models/User');

const login = async (email, password) => {
  const user = await userModel.findOne({ where: { email } });

  if (!user || password !== user.password) {
    return null;
  }

  return user;
};

const create = async (displayName, email, password, image) => {
  const hasUser = await userModel.findOne({ where: { email } });

  if (hasUser) {
    return null;
  }

  const user = await userModel.create({ displayName, email, password, image });
  return user;
};

const getAll = async () => {
  const users = await userModel.findAll();
  return users;
};

const getById = async (id) => {
  const user = await userModel.findOne({ where: { id } });
  return user;
};

module.exports = {
  login,
  create,
  getAll,
  getById,
};