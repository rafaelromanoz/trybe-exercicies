const { getAddresByCep, create } = require('../../models/Cep');
const { formatCep, formatReturn } = require('../../utils/formaters');
const rescue = require('express-rescue');

const cepMiddleware = rescue(async (req, res, next) => {
  const { cep } = req.params;
  const newCep = formatCep(cep);
  const addres = await getAddresByCep(newCep);
  if (addres.length === 0)
    return next({ error: { code: 'notFound', message: 'CEP não encontrado' } });
  return res.status(200).json({ cep, ...formatReturn(addres[0]) });
});

const cepPost = async (req, res) => {
  const address = req.returnApi;
  const { cep, logradouro, bairro, localidade, uf } = address;
  const objFormat = formatReturn(address);
  await create(objFormat);
  return res.status(201).json({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
  cepMiddleware,
  cepPost,
  formatCep,
};
