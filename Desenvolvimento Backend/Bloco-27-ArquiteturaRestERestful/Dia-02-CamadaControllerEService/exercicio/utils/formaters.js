const formatCep = (cep) => {
  return cep.split('-').join('');
};

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const formatReturn = ({cep, logradouro, bairro, localidade, uf }) => {
  return {
    cep: formatCep(cep),
    logradouro: capitalize(logradouro),
    bairro: capitalize(bairro),
    localidade: capitalize(localidade),
    uf: uf.toUpperCase(),
  };
};

module.exports = {
  formatCep,
  capitalize,
  formatReturn
}