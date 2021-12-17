// const fs = require('fs');

// fs.readFile('./arquivo.txt', (err, content) => {
//   if (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//     return;
//   }

//   console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
// });

function calcularDivisao(num1,num2){
  if(num2 === 0) {
    throw new Error('Não pode ser feito uma divisão por zero');
  }
  const resultado = num1 / num2;
  return resultado;
}

try {
  const resultado = calcularDivisao(2,0);
  console.log(`o resultado é : ${resultado}`);
} catch(e) {
  console.log(`erro: ${e.message}`)
}