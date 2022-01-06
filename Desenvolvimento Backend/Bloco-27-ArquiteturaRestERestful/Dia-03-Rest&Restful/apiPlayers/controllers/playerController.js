const rescue = require('express-rescue');
const {
  getAllPlayersService,
  createPlayerService,
  incrementPlayerService,
} = require('../services/playerService');

const getAllPlayersController = rescue(async (req, res) => {
  const allPlayers = await getAllPlayersService();
  return res.status(200).json(allPlayers);
});

const createPlayerController = rescue(async (req, res) => {
  const { id } = req.params;
  const playerCreated = await createPlayerService(id, req.body);
  return res.status(201).json(playerCreated);
});

const incrementAgePlayerController = rescue(async (req, res) => {
  const { name, increment } = await incrementPlayerService(req.query);
  console.log(increment);
  return res
    .status(200)
    .json({
      message: `The player ${name} has been ${
        increment < 0 ? 'decremented' : 'incremented'
      } ${increment} goals`,
    });
});

module.exports = {
  getAllPlayersController,
  createPlayerController,
  incrementAgePlayerController,
};
