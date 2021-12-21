const connection = require('./connection');
const Axios = require('axios').default;

const getAddresByCep = async (cep) => {
  const [findCep] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep=?',
    [cep]
  );
  return findCep;
};

const getAll = async () => {
  const [allCeps] = await connection.execute('SELECT cep FROM cep_lookup.ceps');
  return allCeps;
};

const getCepFromApi = async (cep) => {
  const {data} = await Axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  if(data.erro) return false;
  return data;
}

const create = async ({cep, logradouro, bairro, localidade, uf}) => {
  await connection.execute(
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES(?,?,?,?,?)',
    [cep, logradouro, bairro, localidade, uf]
  );
  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

module.exports = {
  getAddresByCep,
  create,
  getAll,
  getCepFromApi
};
