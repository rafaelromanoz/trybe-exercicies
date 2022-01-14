const fs = require('fs/promises');
const path = require('path');

const directory = path.resolve(__dirname, '..', 'profiles.json');

const profileController = async (req, res) => {
  const { filename } = req.file;
  const { name, email, password, bio } = req.body;
  const data = await fs.readFile(directory, 'utf-8');
  const dataToJS = JSON.parse(data);
  const newProfile = {
    id: filename,
    name,
    email,
    password,
    bio,
  };
  dataToJS.push(newProfile);
  await fs.writeFile(directory, JSON.stringify(dataToJS));
  return res.status(200).json(newProfile);
};

const profileById = async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile(directory, 'utf-8');
  const dataToJS = JSON.parse(data);
  const findUser = dataToJS.find(({ id: idParam }) => idParam === id);
  if (!findUser) { return res.status(200).json({ error: { message: 'User not found' } }); }
  return res.status(200).json(findUser);
};

module.exports = {
  profileController,
  profileById,
};
