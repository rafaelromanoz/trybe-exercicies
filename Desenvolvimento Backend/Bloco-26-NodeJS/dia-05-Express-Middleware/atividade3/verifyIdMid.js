const verifyId = (req, res, next) => {
  const { id } = req.params;
  if(!id || id === ''){
    return res.status(404).json({message: 'post not found'});
  }
  next();
};

module.exports = verifyId;