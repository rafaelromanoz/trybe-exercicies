const fs = require('fs').promises;
const readline = require('readline-sync');

const interactionUser = async () => {
  const arquivoUser = readline.question('Qual arquivo você deseja usar?');
  fs.readFile(`./${arquivoUser}.txt`,'utf8', (error) => {
    if(error){
      throw new Error('O arquivo não existe')
    }
  });
  const arquivo = await fs.readFile(`./${arquivoUser}.txt`, 'utf8')
  const palavraSubstituida = readline.question('Qual a palavra a ser substituida?');
  const novaPalavra = readline.question('Qual a palavra nova para colocar no lugar?');
  const newArquive = arquivo.replace(new RegExp(palavraSubstituida,'g'), novaPalavra);
  fs.writeFile(`./${arquivoUser}.txt`, newArquive).then(() => console.log('arquivo salvo com sucesso'));
};

interactionUser();