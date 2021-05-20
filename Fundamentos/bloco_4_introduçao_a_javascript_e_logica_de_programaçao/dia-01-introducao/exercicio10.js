let custo=1200;
let venda=1600;

if(custo&&venda<0){
    console.log('Erro na matriz')
}
else{
calculoImposto=(custo/100)*20
custoComImposto=custo+calculoImposto
let lucro=venda-custoComImposto

console.log('O lucro do produto é '+lucro)
}




