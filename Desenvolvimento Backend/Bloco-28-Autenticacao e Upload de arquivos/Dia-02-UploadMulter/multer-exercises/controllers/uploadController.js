const uploadController = (req, res) => {
  if (req.fileValidationError === 'exists') {
    return res.status(403).json({ error: { message: 'File already exists' } });
  }
  if (req.fileValidationError) {
    return res
      .status(403)
      .json({ error: { message: 'Extension must be "png"' } });
  }
  return res.send('cadastrado com sucesso');
};

module.exports = uploadController;
