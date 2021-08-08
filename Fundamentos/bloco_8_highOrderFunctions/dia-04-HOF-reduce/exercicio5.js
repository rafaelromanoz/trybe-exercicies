const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acumulador,currentValue)=>acumulador+currentValue.split('')
  .reduce((acumulador2,currentValue2)=> {
    if(currentValue2 ==='a' || currentValue2 === 'A'){
      return acumulador2+1;
    }
    return acumulador2
  },0),0)
}

assert.deepStrictEqual(containsA(), 20);