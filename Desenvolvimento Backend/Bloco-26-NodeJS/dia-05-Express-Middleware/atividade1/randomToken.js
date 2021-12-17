const generateToken = (length) => {
  let token = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let characterLength = characters.length;
  for(let i = 0; i < length; i++){
    token += characters.charAt(Math.floor(Math.random() * characterLength));
  }
  return token;
};

module.exports = generateToken;