module.exports = (io) => io.on('connection', (socket) => {
  console.log(`entrei no serv com id ${socket.id}`);
  let count = 0;
  console.log(`você tem ${count} likes`)
  socket.on('likePost', () => {
    count += 1;
  });
  socket.on('updateLikes', () => {
    // socket.emit('updatelikes', count) // socket.emit envia só para o usuário que disparou
    io.emit('updatelikes', count); // envia para todos conectados
  });
  socket.on('starPost', (data) => {
    console.log('a quantidade de estrelas é', data);
    socket.broadcast.emit('updateStars', count);
  });
  socket.on('updateStars', () => {

  });
});