const fetch = require('node-fetch');
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};
const split = (string, callback) => {
  callback(string.split(' '));
};
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};
const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};
const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (nameParam) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalSelecionado = Animals.find(({name}) => name === nameParam);
      if (animalSelecionado) {
        return resolve(animalSelecionado);
      }
      return reject('Nenhum animal com esse nome!');
    }, 100);
  });
};
const findAnimalByAge = (ageParam) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const selectedAnimalByAge = Animals.filter(({age}) => age === ageParam)
      if (selectedAnimalByAge.length !== 0) {
        return resolve(selectedAnimalByAge);
      }
      return reject('Nenhum animal com essa idade')
    })
  })
}

const getAnimal = (name) => {
  return findAnimalByName(name).then(teste => teste);
};

const getAnimalByAge = (age) => {
  return findAnimalByAge(age).then(teste => teste);
}





module.exports = {
  uppercase,
  findUserById,
  getUserName,
  getRepos,
  split,
  findAnimalByName,
  getAnimal,
  getAnimalByAge
};
