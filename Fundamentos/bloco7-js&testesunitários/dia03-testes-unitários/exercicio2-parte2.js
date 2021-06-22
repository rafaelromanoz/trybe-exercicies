const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (arrWord) => {
  let lenght = [];
  for (let index in arrWord) {
    lenght.push(arrWord[index].length);
  }
  return lenght;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
console.log(wordLengths(words));
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
