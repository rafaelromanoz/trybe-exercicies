const fs = require('fs').promises;

const leituraArquivoOriginal = async () => {
  try {
    const data = await fs.readFile('../simpsons.json', 'utf8');
    const parseado = JSON.parse(data);
    const mapPersonagem = parseado.map((personagem) => `${personagem.id} - ${personagem.name}`);
    return mapPersonagem;
  } catch (err) {
    return err
  }
}

const verificaId = async (id) => {
  const resultado = await leituraArquivoOriginal();
  const promise = new Promise((resolve,reject) => {
    if(!resultado.some((element) => element.includes(id))){
      reject('Personagem não encontrado');
    }
    const personagemEncontrado = resultado.filter((element) => element.includes(id));
    resolve(`O personagem encontrado é :${personagemEncontrado}`);
  })
  return promise;
};

const retirarPersonagem = async () => {
  const resultado = await leituraArquivoOriginal();
  const filtrarPersonagens = resultado.filter((element) => element.match(/^[^10|6]/g));
  return filtrarPersonagens;
}

// verificaId(9).then((sucess) => console.log(sucess)).catch((err)=> console.log(err));

// retirarPersonagem();

const adicionarDocumento = async () => {
  const resultado = await leituraArquivoOriginal();
  const filtrarPersonagens = resultado.filter((element) => element.match(/[1-4]/g));
  const toJson = JSON.stringify(filtrarPersonagens)
  fs.writeFile('./simpsonFamily.json', toJson, {flag: 'wx'})
}

const adicionarPersonagensAoDocumento = async () => {
  const data = await fs.readFile('./simpsonFamily.json', 'utf8');
  const toJS = JSON.parse(data);
  toJS.push('11 - Nelson Muntz');
  const toJSON = JSON.stringify(toJS)
  fs.writeFile('./simpsonFamily.json', toJSON, {flag: 'w'})
}

const substituirPersonagensNoDocumento = async () => {
  const data = await fs.readFile('./simpsonFamily.json', 'utf8');
  const substituindoPersonagem = data.replace(/Nelson Muntz/gi, 'Maggie Simpson');
  fs.writeFile('./simpsonFamily.json', substituindoPersonagem, {flag: 'w'})
}

substituirPersonagensNoDocumento();


