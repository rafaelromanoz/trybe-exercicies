const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let string = 0;

  for (let index = 0; index < characters.length; index += 1) {
    characters[index] === 'a' || characters[index] === 'e'
      ? results.push((string += 1))
      : results.push(characters[index]);
  }
  return results.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.deepStrictEqual(typeof removeVowels, 'function');
assert.deepStrictEqual(removeVowels(parameter), result);
