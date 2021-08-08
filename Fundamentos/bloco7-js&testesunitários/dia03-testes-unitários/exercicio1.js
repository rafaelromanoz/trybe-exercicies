const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

const expected = sum (4,'5')

// assert.strictEqual(expected,9,' Deveria ser 9');
assert.strictEqual(expected,0,' Deveria ser 0');
assert.strictEqual(expected,0,' Deveria ser 0');
