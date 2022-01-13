const topSecret = (req, res) => res.status(200).json({ message: 'Peter parker é o homem aranha' });

module.exports = {
  topSecret,
};