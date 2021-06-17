// // function userInfo() {
// //     const userEmail = 'maria@email.com';
  
// //     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
// //     console.log(userEmail);
// // }
// //   userInfo();

// //   if (true) {
// //     // inicio do escopo do if
// //     const userAge = "20";
// //     console.log(userAge); // 20
// //     // fim do escopo do if
// //   }
// //   console.log(userAge); // 20

// // const favoriteLanguage = "Javascript";
// // favoriteLanguage = "Python";
// // console.log(favoriteLanguage); // Erro

// let favoriteTechnology = "Machine learning";
// favoriteTechnology = "Facial recognition";
// console.log(favoriteTechnology); // Facial recognition

// Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// )

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

// // A sintaxe básica do operador ternário é muito simples:
// `expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// // Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
// const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
// console.log(trueExpression) // isso é verdade

// const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
// console.log(falseExpression) // isso é mentira

const impar =(2%3===0)?'isso é verdade' : 'isso é falso';
console.log(impar)
