const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let newArray=[];

  for (const index in people) {
    newArray.push(greeting + people[index]);
    
  }
  return newArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof(greetPeople),'function');
assert.deepStrictEqual(greetPeople(parameter),result);

