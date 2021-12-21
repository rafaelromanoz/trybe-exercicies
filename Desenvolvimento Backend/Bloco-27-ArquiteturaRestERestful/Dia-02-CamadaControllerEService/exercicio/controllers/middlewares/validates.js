const Joi = require('joi');
const { getAll, getCepFromApi } = require('../../models/Cep');
const { formatCep } = require('../../utils/formaters');

const validateCepParams = (req, res, next) => {
  const { cep } = req.params;
  const regexCep = /\d{5}-?\d{3}/;
  if (!regexCep.test(cep))
    return next({ error: { code: 'invalidData', message: 'CEP inválido' } });

  next();
};

const validateCepReq = async (req, res, next) => {
  const { cep } = req.body;
  const allCeps = await getAll();
  const { error } = Joi.object({
    cep: Joi.string()
      .regex(/\d{5}-\d{3}/)
      .required(),
    logradouro: Joi.string().required(),
    bairro: Joi.string().required(),
    localidade: Joi.string().required(),
    uf: Joi.required(),
  }).validate(req.body);
  if (allCeps.some((ceps) => ceps === cep))
    return next({ error: { code: 'Conflict', message: 'CEP já existente' } });
  if (error) return next(error);
  next();
};

const validateExistingCep = async (req, res, next) => {
  const { cep } = req.body;
  const allCeps = await getAll();
  const correctCep = formatCep(cep);
  const cepFromApi = await getCepFromApi(cep);
  console.log(cepFromApi);
  if (allCeps.some(({ cep }) => cep === correctCep))
    return next({ error: { code: 'Conflict', message: 'Cep já existente' } });

  if (cepFromApi === false)
    return next({ error: { code: 'notFound', message: 'CEP não encontrado' } });
  req.returnApi = cepFromApi;
  next();
};

module.exports = {
  validateCepParams,
  validateCepReq,
  validateExistingCep,
};
