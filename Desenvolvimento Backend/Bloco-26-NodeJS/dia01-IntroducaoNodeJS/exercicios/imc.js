const readline = require('readline-sync');
const peso = readline.questionFloat('Qual seu peso?');
const altura = readline.questionInt('Qual sua altura?');

const calculoImc = (peso, altura) => {
  altura = altura / 100;
  const imcCalculado = (peso / (altura * altura)).toFixed(1);
  if (imcCalculado < 18.5) {
    return `Você está abaixo do peso IMC:${imcCalculado} (magreza) `;
  }
  if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
    return `Você está com o peso normal IMC:${imcCalculado}`;
  }
  if(imcCalculado >= 20.5 && imcCalculado <= 29.9) {
    return `Você está acima do peso (sobrepeso) IMC:${imcCalculado}`;
  }
  if(imcCalculado >= 30.0 && imcCalculado <= 34.9) {
    return `Você está acima do peso Obesidade grau 1${imcCalculado}`
  }
  if(imcCalculado > 40) {
    return `Você está muito acima do peso obesidade graus 100 IMC: ${imcCalculado}`
  }
};

console.log(`Com seu peso ${peso} e sua altura ${altura}, seu imc é ${calculoImc(peso,altura)}`);

