const newEmployees = (callback) => {
  const employees = {
    id1: callback('Rafael Romano'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};
const user = (param) => {
  const string = param.toLowerCase().replace(' ', '_');
  const email = { Nome: param, email: `${string}@trybe.com` };
  return email;
};

console.log(newEmployees(user));
