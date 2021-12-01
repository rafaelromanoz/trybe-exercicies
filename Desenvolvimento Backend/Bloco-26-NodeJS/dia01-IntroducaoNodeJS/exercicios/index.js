const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './distanciaVelocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
  { name: 'Soma', script: './imc.js'}
];


let mensagem = scripts.map((script, index) => `${index + 1} - ${script.name} \n`);

mensagem.unshift(`Escolha um número para executar o script correspondentes`);

mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido, saindo');

require(script.script);
