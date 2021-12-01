const readline = require('readline-sync');
const fs = require('fs');

const createArquives = () => {
  const arquivoLeitura = readline.question('Qual arquivo você deseja ler?');
  fs.readFile(`./${arquivoLeitura}.txt`, 'utf8', (error, content) => {
    if(error) {
      throw new Error('Arquivo inexistente');
    }
    console.log(content)
  })
}

createArquives();