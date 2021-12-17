const readline = require('readline-sync');

const numAleatorio = readline.questionInt('Qual o número?');

const verificaNumero = (num) => {
  const numeroAleatório = Math.floor(Math.random() * 10);
  return numeroAleatório === num
    ? `Número sorteado: ${numeroAleatório}  Você ganhou`
    : `Número sorteado : ${numeroAleatório}  Você perdeu :(`;
};

console.log(verificaNumero(numAleatorio));
