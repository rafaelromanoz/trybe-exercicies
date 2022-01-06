module.exports = (err, req, res, next) => {
  if(err.error.isJoi) {
    return res.status(400).json({message: err.error.details[0].message})
  }
  if (err.error) {
    const { statusCode, message } = err.error;
    return res.status(statusCode).json({ message });
  }
  return res.status(500).json({ message: 'Internal error' });
};
