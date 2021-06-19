criarArray=[1]

for(index=0;index<=24;index+=1){
  criarArray.push(criarArray[index]+1)
  criarArray[index]=criarArray[index]/2
}
console.log(criarArray)