const input = document.querySelector('#input');
const btnSearch = document.querySelector('#search');
const ul= document.querySelector('#ul')

const fetchApi = async (personagem) => {
  try{
    const response = await fetch(`https://personagemchan.vercel.app/api/quotes/character?name=${personagem}`)
    const obj = await response.json();
    const listOfPhrases = obj.map((elemento) => elemento);
    return listOfPhrases;
  } catch (error){
    return alert('Deu ruim')
  }
}

const createPhrase = async () => {
  const valueOfinput = input.value;
  let p = document.createElement('li');
  const frase2 = await fetchApi(valueOfinput)
  frase2.forEach((elemento)=>{
   p.innerText = elemento;
   ul.appendChild(p)
  })
}

btnSearch.addEventListener('click' ,createPhrase)


 


