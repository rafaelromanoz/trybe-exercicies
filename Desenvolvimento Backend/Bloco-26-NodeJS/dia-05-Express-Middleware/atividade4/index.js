const express = require('express');
const app = express();
const fs = require('fs/promises');
const verifyTeams = require('./verifyTeams');
const PORT = 3000;

app.use(express.json());

app.post('/teams', verifyTeams, async (req, res, next) => {
  try {
    const { name, initials, country, league } = req.body;
    const obj = [
      {
        name,
        initials,
        country,
        league,
      },
    ];
    const teste = JSON.stringify(obj);
     await fs.writeFile('./teams.json', teste);
    return res.status(200).json(obj);
  } catch (err) {
    next(err);
  }
});

app.get('/teams', async (_req, res) => {
  try {
    const data = await fs.readFile('./teams.json', 'utf-8');
    return res.status(200).send(data);
  }catch(err){
    res.status(err).json({message: 'Erro'})
  }
});

app.listen(PORT, () => {
  console.log(`A porta ${PORT} está ouvindo`);
});
