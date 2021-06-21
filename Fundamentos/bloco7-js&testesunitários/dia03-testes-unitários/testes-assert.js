const assert = require('assert');

const soma = (a,b) => a+b;

const expected = soma(1,5);

assert.deepStrictEqual(expected,4, 'o resultado esperado é 4')

