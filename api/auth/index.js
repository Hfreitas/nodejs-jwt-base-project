const jwt = require('jsonwebtoken');
const model = require('../../models/user');

const { SECRET_TOKEN } = process.env;

module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(400).json({ error: 'Token não encontrado ou informado' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_TOKEN);

    const { _id } = decoded.data;
    const user = await model.findOne({ _id });

    if (!user) {
      res.status(401).json({ message: 'Erro ao procurar usuario do token.' });
    }

    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Erro: Seu token é inválido' });
  }
};
