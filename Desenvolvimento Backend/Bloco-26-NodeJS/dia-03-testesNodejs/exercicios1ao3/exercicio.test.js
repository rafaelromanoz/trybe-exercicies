const { expect } = require('chai');
const funcVerifica = require('./exerciciofunc');

describe('Testando função realizada', () => {
  const resposta = funcVerifica(1);
  describe('Verificando resposta positiva', () => {
    it('Verifica se é uma string', () => {
      expect(resposta).to.be.a('string')
    })
    it('Verifica se o número é positivo',() => {
      expect(resposta).to.be.equal('O número é positivo!')
    })
  })
  describe('Verificando resposta negativa', () => {
    const resposta = funcVerifica(-1);
    it('Verificando se a resposta está correta', () => {
      expect(resposta).to.be.equal('O número é negativo!');
    })
  })
  describe('Verificando se o número é neutro', () => {
    const resposta = funcVerifica(0);
    it('Verifica se o número é neutro', () => {
      expect(resposta).to.be.equal('O número é neutro');
    })
  })
  describe('Verifica se é tipo number', () => {
    const resposta = funcVerifica('não sou um número :)');
    it('Verifica o tipo certo', () => {
      expect(resposta).to.be.equal('Moço, oc precisa informar um número pufavô')
    })
  })
});