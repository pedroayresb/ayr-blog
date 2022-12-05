const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret token';

const validateToken = (req, res, next) => {
  const token = req.headers('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
