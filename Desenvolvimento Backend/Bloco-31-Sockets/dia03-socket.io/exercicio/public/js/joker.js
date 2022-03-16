const socket = window.io();

const heartIcon = document.querySelector('#likeIcon');

heartIcon.addEventListener('click', (e) => {
  e.preventDefault();
  socket.emit('likePost', 'teste');
  socket.emit('updateLikes', 'sou eu mesmo')
  return false;
});

const starIcon = document.querySelector('#starIcon');

starIcon.addEventListener('click', (e) => {
  e.preventDefault();
  const currentStarsElement = document.querySelector('#currentStars');
  let currentStars = parseInt(currentStarsElement.innerHTML);

  currentStarsElement.innerHTML = currentStars + 1;

  socket.emit('starPost', currentStars);
});

socket.on('updateStars', (countStars) => {
  document.querySelector('#currentStars').innerHTML = countStars;
});