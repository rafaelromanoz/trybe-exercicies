const fs = require('fs').promises;

//? A flag wx abre o arquivo para escrita **apenas** caso ele não exista. Caso contrário um erro será lançado
fs.writeFile('./arquivo.txt','Eu estive aqui :yes:',{flag: 'wx'})
  .then(() => {
    console.log('Arquivo salvo');
  }).catch((err) => {
    console.log(err)
  });
