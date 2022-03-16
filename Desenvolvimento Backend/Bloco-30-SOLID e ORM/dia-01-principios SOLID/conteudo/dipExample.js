// ./dipExample.js
const fetch = require('node-fetch');
const axios = require('axios').default;

const url = 'https://icanhazdadjoke.com';

const requestWithFetch = () => {
  fetch(url, {
    headers: new fetch.Headers({
      Accept: 'application/json',
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data.joke))
    .catch((err) => console.log(err));
};

const requestWithAxios = () => {
  axios
    .get(url, {
      headers: { Accept: 'text/plain' },
    })
    .then((response) => console.log(response.data));
};

const getJokes = (numberOfJokes, jokeRequest = requestWithFetch) => {
  for (let i = 0; i < numberOfJokes; i += 1) jokeRequest();
};

getJokes(5, requestWithAxios);

module.exports = { getJokes };