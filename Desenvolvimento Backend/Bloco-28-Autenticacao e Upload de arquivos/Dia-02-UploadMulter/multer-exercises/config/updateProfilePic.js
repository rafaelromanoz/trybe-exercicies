const multer = require('multer');
const path = require('path');

const directory = path.resolve(__dirname, '..', 'profilePics');

const storage = multer.diskStorage({
  destination: directory,
});

module.exports = {
  uploadProfile: multer({ storage }),
};
