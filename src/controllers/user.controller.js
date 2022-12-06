const jwt = require('jsonwebtoken');
const userServices = require('../services/user.services');

const secret = process.env.JWT_SECRET || 'secretToken';

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userServices.login(email, password);

  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: {
    email: user.email,
    id: user.id,
  } }, secret, jwtConfig);

  res.status(200).json({ token });
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userServices.create(displayName, email, password, image);

  if (!user) {
    return res.status(409).json({ message: 'User already registered' });
  }
  
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: {
    email: user.email,
    id: user.id,
  } }, secret, jwtConfig);

  res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const users = await userServices.getAll();
  res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userServices.getById(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  res.status(200).json(user);
};

module.exports = {
  login,
  create,
  getAll,
  getById,
};