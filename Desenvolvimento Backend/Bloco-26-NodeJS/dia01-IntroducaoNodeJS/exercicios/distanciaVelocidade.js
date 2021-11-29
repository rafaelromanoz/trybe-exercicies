const readfile = require('readline-sync');
const distancia = readfile.questionInt('Qual a distância?');
const velocidade = readfile.questionInt('Qual a velocidade?');

const mediaDisTempo = (distancia,velocidade) => distancia/velocidade;

console.log(`A média entre a distância e velocidade é: ${mediaDisTempo(distancia, velocidade)}`);

