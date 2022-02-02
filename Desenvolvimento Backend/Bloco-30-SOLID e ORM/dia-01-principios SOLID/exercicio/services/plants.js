const defaultPlants = [
  {
    id: 1,
    breed: 'Bromelia',
    needsSun: false,
    origin: 'Argentina',
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: 'Orquidea',
    size: 99,
    needsSun: false,
    origin: 'Brazil',
  },
];

let createdPlants = 0;

const calculateWaterFrequency = (needsSun, size, origin) => (needsSun
  ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
  : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7));

const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const waterFrequency = calculateWaterFrequency(needsSun, size, origin);
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const getPlants = () => defaultPlants;

const getPlantById = (id) => defaultPlants.filter((plant) => plant.id === id);

const needsSun = (plant) => !!plant.needsSun;

const removePlantById = (id) => defaultPlants.filter((plant) => plant.id !== id);

const getPlantsThatNeedsSunWithId = (id) => defaultPlants
  .filter((plant) => needsSun(plant) && plant.id === id);

const editPlant = (plantId, newPlant) => defaultPlants.map((plant) => {
  if (plant.id === plantId) {
    return newPlant;
  }
  return plant;
});

const createNewPlant = (plant) => {
  createdPlants += 1;
  const mappedPlant = initPlant(createdPlants, { ...plant });
  defaultPlants.push(mappedPlant);
  return mappedPlant;
};

module.exports = {
  createNewPlant,
  editPlant,
  getPlantsThatNeedsSunWithId,
  removePlantById,
  getPlantById,
  getPlants,
};
