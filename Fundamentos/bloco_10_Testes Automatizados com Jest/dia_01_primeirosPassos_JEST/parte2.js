function encode(string) {

  string = string.split('')

  for (let key in string) {
    if (string[key] === 'a') {
      /** Source a próxima linha de código foi inspirado nesse link: https://pt.stackoverflow.com/questions/117058/replace-no-array-javascript */
      string[key] = string[key].replace('a', '1');
    }
    else if (string[key] === 'e') {
      string[key] = string[key].replace('e', '2');
    }
    else if (string[key] === 'i') {
      string[key] = string[key].replace('i', '3');
    }
    else if (string[key] === 'o') {
      string[key] = string[key].replace('o', '4');
    }
    else if (string[key] === 'u') {
      string[key] = string[key].replace('u', '5');
    }
  }
  return string.join('')
}
console.log(encode('aeiou'))
function decode(string) {

  string = string.split('')


  for (let key in string) {
    if (string[key] === '1') {
      /** Source a próxima linha de código foi inspirado nesse link: https://pt.stackoverflow.com/questions/117058/replace-no-array-javascript */
      string[key] = string[key].replace('1', 'a');
    }
    else if (string[key] === '2') {
      string[key] = string[key].replace('2', 'e');
    }
    else if (string[key] === '3') {
      string[key] = string[key].replace('3', 'i');
    }
    else if (string[key] === '4') {
      string[key] = string[key].replace('4', 'o');
    }
    else if (string[key] === '5') {
      string[key] = string[key].replace('5', 'u');
    }
  }
  return string.join('')
}

const hydrate = (string) => {
  const numbersFromString = /\d+/g
  let stringSplit = string.match(numbersFromString)
  let teste = stringSplit.reduce((acc, curr)=> acc + parseInt(curr),0)
  if(teste > 1){
    return `${teste} copos de água`
  }
  return `${teste} copo de água`;
}
function techList(array, name) {
  array = array.sort()
  if (array.length != [0]) {
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] != null) {
        array[index] = { tech: array[index], name };
      }
    }
}
  else {
    return 'Vazio!'
  }
  return array
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'Rafael'))

module.exports = {
  encode,
  decode,
  hydrate,
  techList
}