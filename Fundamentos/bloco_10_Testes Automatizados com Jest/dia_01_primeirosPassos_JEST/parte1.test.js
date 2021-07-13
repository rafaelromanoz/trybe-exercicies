const {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
  obj1,
  obj2,
  obj3,
} = require('./parte1.js');

describe('Exercicio 1', () => {
  it('Retorno de sum é 9', () => {
    expect(9).toBe(sum(4, 5));
  });
  it('Retorno de sum é 0', () =>{
    expect(0).toBe(sum(0,0))
  });
  it('Retorna erro ',()=>{
    expect(() => {sum()}).toThrow();
  })
  it('Verifica se o erro é "parameters must be numbers" ',()=>{
    expect(() => {sum(4,"5")}).toThrowError(new Error('parameters must be numbers'));
  })
});


