// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const calculoFatorial = (number) =>
  number === 0 ? 1 : number * calculoFatorial(number - 1);

console.log(calculoFatorial(6));

// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:

const verificaPalavra = (palavra) => {
  const palavras = palavra.split(' ');
  let palavraMaior = palavras[0];
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[index].length > palavraMaior.length) {
      palavraMaior = palavras[index];
    }
  }
  return palavraMaior;
};

console.log(
  verificaPalavra('Antônio foi no banheiros e não sabemos o que aconteceu')
);
