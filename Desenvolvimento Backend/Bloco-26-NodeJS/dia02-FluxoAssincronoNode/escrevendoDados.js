const fs = require('fs').promises;
const readLine = require('readline-sync');

const inputFromUser = readLine.question('Oque você quer escrever?');

fs.writeFile('./arquivo.txt',inputFromUser ).then(()=> {
  console.log('Arquivo escrito com sucesso');
})
.catch((err)=> {
  console.log(`Erro ao escrever arquivo: ${err.message}`)
})