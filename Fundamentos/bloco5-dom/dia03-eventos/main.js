const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

// função que escolhe uma classe
function classChange(click){
  let tech=document.querySelector('.tech');
  tech.classList.remove('tech');
  click.target.classList.add('tech');
  input.value='';
}
//função que armazena o value e coloca em outro lugar

function inputText(text){
  let tech=document.querySelector('.tech');
  tech.innerText=text.target.value;
}
// novo link
function linkWeb(){
  window.open("https://mangalivre.net/" ,"_blank");
}

let titul=document.querySelector('h1')


divUm.addEventListener("click",classChange);
divDois.addEventListener("click",classChange);
divTres.addEventListener("click",classChange);
input.addEventListener("input",inputText);
myWebpage.addEventListener("dblclick",linkWeb);

titul.addEventListener("mouseover",function(){
  titul.style.color="black";
});


  





function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.