const multipleUpdateController = (req, res) => {
  const mapFiles = req.files.map(({ originalname, path }) => ({
    file: originalname,
    url: `http:localhost:3000/${path}`,
  }));
  return res.status(200).json(mapFiles);
};

module.exports = multipleUpdateController;
