const readline = require('readline-sync');
const num = readline.questionInt('Digite um numero para o fazer o fatorial');

const calcularFatorialRecursivamente = (n) => {
  if(n === 1){
    return 1;
  }
  return n * calcularFatorialRecursivamente(n-1);
};

console.log(calcularFatorialRecursivamente(num));