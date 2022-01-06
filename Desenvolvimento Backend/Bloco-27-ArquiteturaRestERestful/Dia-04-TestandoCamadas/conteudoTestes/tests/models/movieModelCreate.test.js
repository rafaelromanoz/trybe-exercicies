const { expect } = require('chai');
const sinon = require('sinon');

const {MongoClient} = require('mongodb');
const { getConnection } = require('./mongoMockConnection');

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');
/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/

describe('insere um novo filme no BD', () => {
  let connectionMock;
  const payloadMovie = {
    title: 'Example movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999
  }
  before(async () => {
    connectionMock = await getConnection();

    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });
  after(async() => {
    await connectionMock.db('model_example').collection('movies').drop();
    MongoClient.connect.restore();
  })
  describe('Quando é inserido com sucesso', () => {
    it('Retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.be.a('object')
    });
    it('Tal objeto possui o "id" do novo filme inserido',async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.be.property('id');
    })
    it('Deve existir um filme com o título cadastrado!', async () => {
      await MoviesModel.create(payloadMovie);
      const movieCreated = await connectionMock.db('model_example').collection('movies').findOne({title:payloadMovie.title});
      expect(movieCreated).to.be.not.null;
    })
  })
})