//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function inteiroMaisRepete(array) {
  let numberOfRepetitions=0;
  let contador=array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] === contador) {
      numberOfRepetitions++
      console.log(numberOfRepetitions)
    }
  }

}

inteiroMaisRepete((array = [2, 3, 2, 5, 8, 2, 4, 4, 4, 4]));
