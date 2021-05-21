// descobrir maior número

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero=0;

for (let index=0;index<numbers.length;index+=1){// irá percorrer o array inteiro
    if(numbers[index]>maiorNumero){//se o array numbers na posição do index for maior que a variável maior numero
      maiorNumero=numbers[index]//o maior numero vai receber o número, e isso ocorre até o fim do array
    }
    
}

console.log(maiorNumero)