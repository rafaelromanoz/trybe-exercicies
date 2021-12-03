/**
 * TODO: Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
 * TODO: Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
 * TODO: Após concluir a escrita do arquivo ela deverá retornar um ok .
 */

const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const escritaArquivo = require('./exercicio4e5func');

describe('Testando função exercícios 4 e 5', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });
  after(() => {
    fs.writeFileSync.restore();
  });
  describe('A resposta', () => {
    it('é uma string', () => {
      const respostaEscrita = escritaArquivo('./io-files/arquivoEscrita.txt', 'Ta ossada');
      expect(respostaEscrita).to.be.a('string');
    });
    it('Foi escrito corretamente', () => {
      const respostaEscrita = escritaArquivo('./io-files/arquivoEscrita.txt', 'Ta ossada');
      expect(respostaEscrita).to.be.equal('Deu certo pae');
    });
  });
});
