const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const adicionarTurnoManha = (obj, chave, value) => {
  obj[chave] = value;
  return obj;
};

adicionarTurnoManha(lesson2, 'turno', 'manhã');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const mostrarKeys = (obj) => Object.keys(obj);

mostrarKeys(lesson1);

// Crie uma função para mostrar o tamanho de um objeto.

const tamanhoObj = (obj) => Object.keys(obj).length;

tamanhoObj(lesson1);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valuesObj = (obj) => Object.values(obj);

valuesObj(lesson1);

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLeasons = Object.assign({}, { lesson1, lesson2, lesson3 });

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const numeroTotalAlunos = (todasaulas) => {
  let total = 0;
  let valores = Object.values(todasaulas);
  for (let key in valores) {
    if (valores[key]['numeroEstudantes']) {
      total += valores[key]['numeroEstudantes'];
    }
  }
  return total;
};
numeroTotalAlunos(allLeasons);

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const valorChave = (obj, posicao) => {
  const valor = Object.values(obj)[posicao];
  return valor;
};

valorChave(lesson2, 2);

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verificaChaveValor = (obj, chave, valor) => {
  let valores = Object.entries(obj);
  console.log(valores)
  for (let key in valores) {
    const chaves = valores[key][0];
    const values = valores[key][1];
    if (chaves === chave && values === valor) {
      return true;
    } return false;
  }
};

verificaChaveValor(lesson3, 'materia', 'Maria Clara');
