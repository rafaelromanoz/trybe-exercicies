const readline = require('readline-sync');
const numUser = readline.questionInt('Digite um número para calcular o fibonnaci!')

const calculaFibo = (num) => {
  const fibonnaci = [];
  fibonnaci[1] = 1;
  fibonnaci[2] = 1;
  for(let i = 3; i < num; i++) {
    fibonnaci[i] = fibonnaci[i - 1] + fibonnaci[i - 2];
  }
  return `os números do calculo de fibonnaci é: ${fibonnaci}`;
}

console.log(calculaFibo(numUser));