const fetch = require('node-fetch');

const randomNumber = () => Math.floor(Math.random() * 100);
const toUpperCase = (string) => string.toUpperCase();
const firstLetter = (string) => string.substring(0,1);
const concatStrings = (string1,string2) => string1 + string2;

const fetchApiDog = async () => {
  try {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const dog = await response.json();
  return dog.status;
  } catch(error) {
    return dog.status;
  }
}

module.exports = {
  randomNumber,
  toUpperCase,
  firstLetter,
  concatStrings,
  fetchApiDog
};
