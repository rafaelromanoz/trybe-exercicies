const multer = require('multer');
const path = require('path');

const directory = path.resolve(__dirname, '..', 'uploads');

const storage = multer.diskStorage({
  destination: directory,
});

module.exports = {
  uploadMany: multer({  storage  }),
};