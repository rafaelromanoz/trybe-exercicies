const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76


// For FIX

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maçã', 'Pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Chocolate', 'Brigadeiro', 'Açai'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit,...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));