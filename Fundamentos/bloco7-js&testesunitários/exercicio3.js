const button = document.getElementById('conter');
const h1 = document.getElementById('h1');
let counter = 0;

button.addEventListener('click', () => {
  counter += 1;
  h1.innerText = counter;
});
