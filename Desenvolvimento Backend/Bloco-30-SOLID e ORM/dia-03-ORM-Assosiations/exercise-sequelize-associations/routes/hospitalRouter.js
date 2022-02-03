const express = require('express');

const { getPatientsAndPlans,
  getPatientSurgerie,
  getPlanById
} = require('../controllers/hospitalController');

const hospitalRouter = express.Router();

hospitalRouter.get('/patientsurgerie', getPatientSurgerie);
hospitalRouter.get('/plan/:id', getPlanById);
hospitalRouter.get('/', getPatientsAndPlans);
module.exports = hospitalRouter;