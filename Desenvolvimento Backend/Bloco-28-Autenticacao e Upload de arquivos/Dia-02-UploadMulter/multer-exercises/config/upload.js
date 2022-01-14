const multer = require('multer');
const path = require('path');
const fs = require('fs');

const directory = path.resolve(__dirname, '..', 'uploads');

const fileFilter = (req, file, cb) => {
  const newFileName = file.originalname;
  if(file.mimetype !== 'image/png') {
    //Colocar uma mensagem de erro na requisição
    req.fileValidationError = true;
    //rejeitar o arquivo
    return cb(null, false)
  }
   //fs.readdirSync retorna uma lista com nome de todos os arquivos da pasta uploads.
  const files = fs.readdirSync(directory);
   //Aqui usamos a função some, que retorna `true` se algum dos items do array passar no teste, no nosso caso o `file.includes`.
  if(files.some((file) => file === newFileName)){
    req.fileValidationError = 'exists';

    return cb(null, false)
  }
  //aceitar o arquivo
 return cb(null, true)
};

const storage = multer.diskStorage({
  destination: directory,
  filename: (_req, file, callback) => {
    return callback(null, `${Date.now()}-${file.originalname}`)
  },
});

module.exports = {
  directory,
  upload: multer({ fileFilter, storage  }),
};

