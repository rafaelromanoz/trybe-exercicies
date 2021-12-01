const fs = require('fs').promises;

Promise.all([
  fs.readFile('./arquivo.txt'),
  fs.readFile('./file.txt'),
  fs.readFile('./io-assinc/meu-arquivo.txt')
]).then(([file1,file2,file3]) => {
  const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
  console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
}).catch((err) => {
  console.log(`Erro ao ler arquivos: ${err.message}`);
});