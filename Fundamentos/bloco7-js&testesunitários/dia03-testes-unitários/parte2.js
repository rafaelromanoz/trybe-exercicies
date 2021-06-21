const assert = require('assert');

const addOne = (arr) => {
  let arrayNovo=[];
  for (let index in arr){
    arrayNovo.push(arr[index]+1)
  }
  return arrayNovo;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
