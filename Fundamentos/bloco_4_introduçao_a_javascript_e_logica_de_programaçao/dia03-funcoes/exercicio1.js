let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',  
  };

let info2={
    personagem:'Tio Patinhas',
    origem:'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota:'O último MacPatinhas',
    recorrente:'Sim'
}
info.recorrente='Sim'

console.table(info)

for(let key in info){
    console.log(key)
}
for(let key in info){
    console.log(info[key])
}

console.log(info.personagem +' e ' +info2.personagem)
console.log(info.origem +' e ' +info2.origem)
console.log(info.nota +' e ' +info2.nota)
console.log(info.recorrente +' e ' +info2.recorrente)