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

describe('Exercicio 2', () => {
  it('Verifica se a chamada da myRemove retorna o array esperado',()=>{
    expect([1,2,4]).toEqual(myRemove([1,2,3,4],3))
  })
  it('Verifica se a chamada da myRemove não retorna o seguinte array',() => {
    expect([1,2,3,4]).not.toEqual(myRemove([1,2,3,4],3))
  })
  it('Verifica se o array passado por parãmetro não sofreu alterações',()=> {
    expect([1,2,3,4]).toEqual(myRemove([1,2,3,4]))
  })
  it('Verifica se a chamada myRemove retorna o array esperado',() => {
   expect([1,2,3,4]).toEqual(myRemove([1,2,3,4],5))
  })
})

describe('Exercicio 3',()=>{
  it('Verifica se a chamada myRemoveWithoutCopy retorna o array esperado ',() => {
    expect([1,2,4]).toEqual(myRemoveWithoutCopy([1,2,3,4],3))
  })
  it('Verifica se a chamada myRemoveWithoutCopy retorna o array esperado ',() => {
    expect([1,2,3,4]).not.toEqual(myRemoveWithoutCopy([1,2,3,4],3))
  })
  it('Verifica se a chamada myRemoveWithoutCopy retorna o array esperado ',() => {
    expect([1,2,4]).toEqual(myRemoveWithoutCopy([1,2,3,4],3))
  })
  it('Verifica se a chamada myRemoveWithoutCopy retorna o array esperado ',() => {
    expect([1,2,4]).toEqual(myRemoveWithoutCopy([1,2,3,4],3))
  })
})

describe('Exercicio 4' ,() => {
  it('Verifica se o numero divisivel por 3 e por 5 é o retorno esperado',() =>{
    expect('fizzbuzz').toBe(myFizzBuzz(15))
  })
  it('Verifica se o numero divisivel por 3  é o retorno esperado',() =>{
    expect('fizz').toBe(myFizzBuzz(3))
  })
  it('Verifica se o numero divisivel por 5  é o retorno esperado',() =>{
    expect('buzz').toBe(myFizzBuzz(5))
  })
  it('Verifica se o numero divisivel por 3  é o retorno esperado',() =>{
    expect(7).toBe(myFizzBuzz(7))
  })
  it('Verifica se o numero divisivel por 3  é o retorno esperado',() =>{
    expect(myFizzBuzz('5')).toBeFalsy()
  })
})

describe('Exercicio 5', ()=>{
  it('verifica se são identicos ou não',() =>{
    expect(obj1).toEqual(obj2)
  })
  it('verifica se são identicos ou não',() =>{
    expect(obj1).toEqual(obj3)
  })
  it('verifica se são identicos ou não',() =>{
    expect(obj2).toEqual(obj3)
  })
})

