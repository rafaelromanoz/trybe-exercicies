let numeros=[0]


for(let index=0;numeros.length<=25;index+=1){//começando da posição 0 enquanto o tamanho do array for menor ou igual 25 repita 
   numeros.push(numeros[index]+1)
}

console.log(numeros)

