module.exports = (req, res, next) => {
  const {autorization} = req.headers;
  if(!autorization || autorization.length !== 16) {
    return res.status(401).json({message: 'Token inválido!'});
  }
  return next();
}