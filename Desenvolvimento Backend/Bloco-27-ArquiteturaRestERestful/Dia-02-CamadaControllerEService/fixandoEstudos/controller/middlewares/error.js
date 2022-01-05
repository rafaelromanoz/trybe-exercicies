module.exports = (err, req, res, _next) => {
  const {
    error: { statusCode, message },
  } = err;
  if (statusCode) {
    return res.status(statusCode).json({
      error: {
        statusCode,
        message
      }
    });
  }
  return res.status(500).json({ message: 'deu alguma coisa ruim' });
};
