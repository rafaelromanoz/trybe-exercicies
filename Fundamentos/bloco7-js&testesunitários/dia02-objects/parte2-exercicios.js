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

const adicionarTurnoManha = (obj, chave, value) => {
  obj[chave] = value;
  return obj;
};

adicionarTurnoManha(lesson2, 'turno', 'manhã');

const mostrarKeys = (obj) => Object.keys(obj);

mostrarKeys(lesson1)

const tamanhoObj = (obj) => Object.keys(obj).length;

tamanhoObj(lesson1);


const valuesObj = (obj) => Object.values(obj);

console.table(valuesObj(lesson1));








