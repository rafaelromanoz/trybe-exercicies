const { verifyToken } = require('../services/authService');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token não informado' });

    const user = verifyToken(authorization);
    if (!user.admin) return res.status(401).json({ message: 'Restricted acess' });
    if (!user) return res.status(401).json({ message: 'Token inválido' });

    req.user = user;
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(401).json({ message: 'Falha na autenticação' });
  }
};