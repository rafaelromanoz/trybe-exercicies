const { uppercase, getUserName, getRepos } = require('./funcoesExercicios');

test('Testando a uppercase', (done) => {
  uppercase('rafael', (str) => {
    expect(str).toBe('RAFAEL');
    done();
  });
});

describe('Testando exercicio 2 e 3', () => {
  it('quando o id existe', () => {
    expect.assertions(1);
    return getUserName(4).then((id) => {
      expect(id).toEqual('Mark');
    });
  });
  it('se não existir', () => {
    expect.assertions(1);
    return getUserName(7).catch((error) =>
      expect(error).toEqual({ error: 'User with 7 not found.' })
    );
  });
  it('Com async-await', async () => {
    const idPeople = await getUserName(4);
    expect(idPeople).toEqual('Mark');
  });
  it('erro com async-await', async () => {
    try {
      await getUserName(8);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 8 not found.' });
    }
  });
});

describe('Testando exercicio 4', () => {
  it('Verificando se tem tal coisa aqui', async () => {
    const trabTrybe = await getRepos(
      'https://api.github.com/orgs/tryber/repos'
    );
    const verificaPrimeiroId = trabTrybe.some(
      (project) => project === 'sd-01-week4-5-project-todo-list'
    );
    const verificaSegundoId = trabTrybe.some(
      (project) => project === 'sd-01-week4-5-project-meme-generator'
    );
    expect(verificaPrimeiroId).toBe(true);
    expect(verificaSegundoId).toBe(true);
  });
});
