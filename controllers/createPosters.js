const mockPosts = require('../models/posts');

module.exports = (req, res) => {
  const { title, content } = req.body;

  if (title && content && req.user) {
    mockPosts.push({ title, content });
    return res.status(201).json({
      message: 'Novo post criado',
      data: Date.now(),
    });
  }

  return res.status(500).json({
    message: 'Erro na criação do post',
  });
};
