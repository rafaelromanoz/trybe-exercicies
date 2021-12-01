function calcularDivisao(num1,num2){
  const promise = new Promise((resolve, reject) => {
    if(num2 === 0) {
      reject("Deu ruim não pode dividir um número por 0")
    }
    const resultado = num1 / num2
    resolve(resultado)
  })
  return promise;
};

calcularDivisao(0,2)
  .then((result) => console.log(result))