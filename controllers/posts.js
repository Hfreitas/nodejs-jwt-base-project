const mockPosts = require('../models/posts');

// eslint-disable-next-line no-unused-vars
module.exports = (req, res, _next) => {
  res.status(200).json({ mockPosts });
};
