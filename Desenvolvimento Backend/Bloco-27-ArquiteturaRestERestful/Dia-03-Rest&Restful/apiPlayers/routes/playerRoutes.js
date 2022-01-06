const express = require('express');
const {
  getAllPlayersController,
  getPlayerByIdController,
  createPlayerController,
  incrementAgePlayerController
} = require('../controllers/playerController');
const routerPlayer = express.Router();

routerPlayer.get('/', getAllPlayersController);

routerPlayer.post('/', createPlayerController);

routerPlayer.put('/search', incrementAgePlayerController);
// routerPlayer.get('/', getPlayerByIdController);


module.exports = routerPlayer;
