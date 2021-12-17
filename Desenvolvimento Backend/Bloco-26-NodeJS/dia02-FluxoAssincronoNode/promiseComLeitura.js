const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
}

readFilePromise('./file.txt').then((retorno )=> {
  console.log(`Lido o arquivo com ${retorno.byteLength} bytes`)
}).catch((err)=> {
  console.log(`Erro ao ler o arquivo:${err.message}`)
})