const getMeController = (req, res, _next) => res.status(200).json(req.user);

module.exports = {
  getMeController,
};