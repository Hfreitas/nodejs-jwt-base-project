const Model = require('../models/user');

module.exports = (req, res) => {
  const { username, password } = req.body;

  const data = new Model({
    username,
    password,
  });

  data
    .save()
    .then((doc) => {
      return res.status(201).json({ message: 'Novo usuário', data: doc });
    })
    .catch((err) => {
      return res.status(500).send('Erro ao salvar o usuário no banco', err);
    });
};
