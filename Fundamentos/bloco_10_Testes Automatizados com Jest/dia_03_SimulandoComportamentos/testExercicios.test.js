const funcao = require('./exercicios');
const {fetchApiDog} = funcao
jest.mock('./exercicios');
const fetch = require('node-fetch');

// describe('Exercicio 1, 2 e 3 ', () => {
//   it('Fazendo testes para verificar se está com o retorno passado e se foi chamada', () => {
//     funcs.randomNumber.mockReturnValue(10);
//     expect(funcs.randomNumber()).toBe(10);

//     expect(funcs.randomNumber).toHaveBeenCalled();
//     expect(funcs.randomNumber).toHaveBeenCalledTimes(1);
//   });
//   it('Fazendo testes para a nova implementação receber 2 parâmetros e dividir o primeiro pelo segundo', () => {
//     funcs.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

//     expect(funcs.randomNumber(4, 2)).toBe(2);
//     expect(funcs.randomNumber).toHaveBeenCalled();
//     expect(funcs.randomNumber).toHaveBeenCalledTimes(1);
//     expect(funcs.randomNumber).toHaveBeenCalledWith(4, 2);
//   });
//   it('Fazendo uma nova implementação e verificando tudo', () => {
//     funcs.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

//     expect(funcs.randomNumber(1, 2, 3)).toBe(6);
//     expect(funcs.randomNumber).toHaveBeenCalled();
//     expect(funcs.randomNumber).toHaveBeenCalledTimes(1);
//     expect(funcs.randomNumber).toHaveBeenCalledWith(1, 2, 3);

//     // resetando o mock
//     funcs.randomNumber.mockReset();
//     funcs.randomNumber = jest.fn().mockImplementation((a) => a * a);

//     expect(funcs.randomNumber(2)).toBe(4);
//     expect(funcs.randomNumber).toHaveBeenCalled();
//     expect(funcs.randomNumber).toHaveBeenCalledTimes(1);
//     expect(funcs.randomNumber).toHaveBeenCalledWith(2);
//   });
// });

// describe('Exercicio 4 e 5', () => {
//   it('Fazer a primeira função retornar caixa baixa', () => {
//     funcs.toUpperCase.mockImplementation((string) => string.toLowerCase())

//     expect(funcs.toUpperCase('RAFAEL')).toBe('rafael');
//     expect(funcs.toUpperCase).toHaveBeenCalled();
//     expect(funcs.toUpperCase).toHaveBeenCalledTimes(1);
//     expect(funcs.toUpperCase).toHaveBeenCalledWith('RAFAEL')
//   })
//   it('Fazer a segunda função retornar a ultima letra da string',() => {
//     funcs.firstLetter.mockImplementation((string) => string.charAt(string.length-1))

//     expect(funcs.firstLetter('rafael')).toBe('l');
//     expect(funcs.firstLetter).toHaveBeenCalled();
//     expect(funcs.firstLetter).toHaveBeenCalledTimes(1);
//     expect(funcs.firstLetter).toHaveBeenCalledWith('rafael')
//   })
//   it('Fazer a terceira função retornar uma concatenação de 3 strings',() => {
//     funcs.concatStrings.mockImplementation((string1,string2,string3)=> `${string1} ${string2} ${string3}`)

//     expect(funcs.concatStfuncs.fetchApiDog.rings('rafael','oliveira','romano')).toBe('rafael oliveira romano');
//     expect(funcs.concatStrings).toHaveBeenCalled();
//     expect(funcs.concatStrings).toHaveBeenCalledTimes(1);
//     expect(funcs.concatStrings).toHaveBeenCalledWith('rafael','oliveira','romano');
//   })
//   test('Exercicio 5 utilizando as mesmas informações da anterior para restora-la', () => {
//     const mockUpCase = jest
//     .spyOn(funcs,'toUpperCase')
//     .mockImplementation((string) => string.toLowerCase())

//     mockUpCase.mockRestore();

//     expect(mockUpCase('rafael')).toBe('RAFAEL');
//     expect(mockUpCase).toHaveBeenCalled();
//     expect(mockUpCase).toHaveBeenCalledTimes(1);
//     expect(mockUpCase).toHaveBeenCalledWith('rafael');
//   })
// })

describe('Exercicio 6 teste',()=>{
  const urlTeste = jest.spyOn(funcao,'fetchApiDog')
  afterEach(urlTeste.mockReset)
  it('verificar se está vindo com o retorno certo ', async () => {
    urlTeste.mockResolvedValue('sucess')
    urlTeste();
    expect(urlTeste).toHaveBeenCalled();
    expect(urlTeste).toHaveBeenCalledTimes(1);
    expect(urlTeste()).resolves.toBe('sucess');
    expect(urlTeste).toHaveBeenCalledTimes(2)
  })
  it('Testando o retorno errado ', async () => {
    urlTeste.mockRejectedValue('error')
    fetchApiDog();
    expect(fetchApiDog).toHaveBeenCalled();
    expect(fetchApiDog).toHaveBeenCalledTimes(1);
    expect(fetchApiDog()).rejects.toBe('error');
    expect(fetchApiDog).toHaveBeenCalledTimes(2);
  })
})