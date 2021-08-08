const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

division(1, 0);

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => {
  division(10, 1);
}, /^Error: parameter y must not be 0$/); // OK

assert.ok(false);
