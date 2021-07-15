const servico = require('./exerciciosConteudo')
jest.mock('./exerciciosConteudo')

test('exercicio para fixar 1', () => {
   
  servico.somar.mockImplementation((a,b)=>a+b);
  servico.somar(1,2)

  expect(servico.somar).toHaveBeenCalled();
  expect(servico.somar).toHaveBeenCalledTimes(1);
  expect(servico.somar).toHaveBeenCalledWith(1,2);
  expect(servico.somar(1,2)).toBe(3)
})
test('exercicio 2 para fixar',() => {
  servico.subtrair.mockImplementation((a,b)=>a-b)
  servico.subtrair(2,1)

  expect(servico.subtrair).toHaveBeenCalled();
  expect(servico.subtrair).toHaveBeenCalledTimes(1);
  expect(servico.subtrair).toHaveBeenCalledWith(2,1);
  expect(servico.subtrair(2,1)).toBe(1)
})
test('exercicio 3 para fixar',() => {
  servico.multiplicar = jest.fn().mockReturnValue(10)

  servico.multiplicar();
  expect(servico.multiplicar).toHaveBeenCalled();
  expect(servico.multiplicar()).toBe(10)
})
test('exercicoo 4 para fixar',() => {
 servico.dividir = jest.fn().mockReturnValue(15)

 servico.dividir(2)
 servico.dividir(5)
 expect(servico.dividir).toHaveBeenCalled()
 expect(servico.dividir()).toBe(15)
})
test('exercicio 5 para fixar',() => {
  servico.subtrair = jest.fn().mockReturnValue(20);
  servico.subtrair.mockImplementation((a,b)=>a-b);
  servico.subtrair();
  servico.subtrair();
  servico.subtrair();
  expect(servico.subtrair).toHaveBeenCalledTimes(3);
  expect(servico.subtrair(40,20)).toBe(20)
})