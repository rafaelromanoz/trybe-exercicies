const { isCelebrateError } = require('celebrate');

module.exports = (err, req, res, _next) => {
  if (isCelebrateError(err)) {
    const errorBody = err.details.get('body');
    const {
      details: [errorDetails],
    } = errorBody;
    return res.status(400).json({
      error: errorDetails.message,
    });
  }
  return res.status(500).send(err);
};
