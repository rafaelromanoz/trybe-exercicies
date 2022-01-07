module.exports = (err, req, res, next) => {
  console.log(err);
  if (err.error) {
    const { statusCode, message } = err.error;
    return res.status(statusCode).json({ message });
  }
  return res.status(500).json({ message: 'Internal error' });
};
