const bcrypt = require('bcrypt');
const Model = require('../models/user');

const saltRounds = 10;

module.exports = async (req, res) => {
  const { username, password } = req.body;

  const encryptedPassWord = await bcrypt.hash(password, saltRounds);

  const data = new Model({
    username,
    password: encryptedPassWord,
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
