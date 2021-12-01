const exerc1 = (param1, param2, param3) => {
  return new Promise((resolve, reject) => {
    if (
      typeof param1 !== 'number' ||
      typeof param2 !== 'number' ||
      typeof param3 !== 'number'
    ) {
      reject('Deu ruim precisa ser tipo number');
    }
    const calc = (param1 + param2) * param3;
    if (calc < 50) {
      reject('Valor muito baixo');
    }
    if (calc > 50) {
      resolve(`É um bom valor, gostei ${calc}`);
    }
  });
};

const numAleatorio1 = Math.floor(Math.random() * 100 + 1);
const numAleatorio2 = Math.floor(Math.random() * 100 + 1);
const numAleatorio3 = Math.floor(Math.random() * 100 + 1);

const exercicio3 = async () => {
  try {
    const resultado = await exerc1(numAleatorio1,numAleatorio2,numAleatorio3);
    console.log(resultado);
  } catch(err) {
    console.log(err);
  }
}

exercicio3();