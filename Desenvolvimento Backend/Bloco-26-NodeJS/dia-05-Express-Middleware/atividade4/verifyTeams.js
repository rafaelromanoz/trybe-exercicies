const nameReg = /\d{5,}/gi;
const initialsReg = /[A-Z]{0,3}/gi;
const countryReg = /\w{3,}/gi;
const leagueReg = /.*/gi;

const verifyTeams = (req, res, next) => {
  const { name, initials, country, league } = req.body;
  if (
    !(
      nameReg.test(name) ||
      initialsReg.test(initials) ||
      countryReg.test(country) ||
      leagueReg.test(league)
    )
  ) {
    return res.status(400).json({message: 'invalid data'})
  }
  next();
};

module.exports = verifyTeams;


