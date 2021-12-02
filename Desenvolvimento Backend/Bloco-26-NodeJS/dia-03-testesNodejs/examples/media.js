function calculaSituacao(media){
  if(media > 7){
    return 'aprovado';
  }
  return 'reprovado';
};

module.exports = calculaSituacao;

console.log(calculaSituacao(6))