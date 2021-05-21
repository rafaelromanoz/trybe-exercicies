let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = 0;

for (let index = 0; index < numbers.length; index += 1) {// vai percorrer o array
 if(numbers[index]%2!=0){//se o número for impar  
   impar++//acrescenta ao impar a quantidade de index
 }
 
}
console.log(impar)
