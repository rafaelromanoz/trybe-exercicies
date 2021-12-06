const validUser = [
  { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
  { username: 'McRonald', password: 'Senha123Mudar' },
  { username: 'Burger Queen', password: 'Senha123Mudar' },
  { username: 'UpWay', password: 'Senha123Mudar' },
];

const authMiddleware = (req, res, next) => {
  const {username, password} = req.headers;
  if(!username && !password) {
    return res.status(401).json({message: 'Username and password cant be blank!'});
  }
  const foundUser = validUser.find((user) => user.username === username);
  if(!foundUser) return res.status(401).json({message: 'Invalid credentials!'});

  if(!(username === foundUser && password === foundUser.password)) {
    return res.status(401).json({message: 'Invalid credentials!'});
  }
  req.user = foundUser; //! aqui estamos passando o usuário encontrado para o próximo middleware;
};


module.exports = authMiddleware;
