const { Patient, Plan, Surgerie } = require('../models');

const getPatientsAndPlans = async (req, res) => {
  try {
    const patient = await Plan.findAll({
      include: { model: Patient, as: 'patients' },
    });
    return res.status(200).json(patient);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getPatientSurgerie = async (req, res) => {
  try {
    const patients = await Patient.findAll({
      include: 
        { model: Surgerie, as: 'surgeries', through: { attributes: [] } },
    });
    return res.status(200).json(patients);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getPlanById = async (req, res) => {
  try {
      const { id } = req.params;
      const user = await Plan.findOne({
        where: { planId: id },
        include: [{ model: Patient, as: 'patients', attributes:{exclude: ['plan_id', 'patient_id']} }],
      });
    return res.status(200).json(user)
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Algo deu blab' });
  }
}

module.exports = {
  getPatientsAndPlans,
  getPatientSurgerie,
  getPlanById,
};
