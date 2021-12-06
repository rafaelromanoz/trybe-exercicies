const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if(authorization.length < 12) {
    res.status(401).json({message: 'Invalid token'});
  }
  next();
};

module.exports = validateToken;