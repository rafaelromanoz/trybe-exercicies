const fs = require('fs').promises;
const escritaArquivo = (nomearquivo, conteudo) => {
  fs.writeFileSync(`${nomearquivo}`, conteudo, 'utf8');
  return 'Deu certo pae';
};

module.exports = escritaArquivo;