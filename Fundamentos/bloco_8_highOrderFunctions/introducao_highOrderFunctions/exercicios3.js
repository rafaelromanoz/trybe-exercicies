const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const pontuation = (array1, array2, callback) => {
  return callback(array1, array2);
};

const verificaPontuation = (respostasCorretas, respostasEstudantes) => {
  pontos = 0;
  for (let index = 0; index < 10; index += 1) {
    if (respostasCorretas[index] === respostasEstudantes[index]) {
      pontos += 1;
    } else if (respostasEstudantes[index] === 'N.A') {
      pontos = pontos;
    } else {
      pontos -= 0.5;
    }
  }
  return pontos;
};
console.log(pontuation(rightAnswers, studentAnswers, verificaPontuation));
