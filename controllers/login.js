const jwt = require('jsonwebtoken');
const User = require('../models/user');

const { SECRET_TOKEN } = process.env;

module.exports = async (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  if (!username || !password) return res.send(401);

  const user = await User.findOne({ username });

  if (!user) res.status(401).json(false);

  const jwtConfig = {
    expiresIn: '30m',
    algorithm: 'HSH256',
  };

  const token = jwt.sign({ data: user }, SECRET_TOKEN, jwtConfig);

  return res.status(200).json({ token });
};
