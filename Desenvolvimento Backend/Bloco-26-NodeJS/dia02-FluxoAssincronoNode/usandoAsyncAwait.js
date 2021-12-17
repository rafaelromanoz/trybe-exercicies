const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  }catch(err) {
    console.log(`Erro ao escrever o arquivo: ${err.message}`)
  }
}

main();