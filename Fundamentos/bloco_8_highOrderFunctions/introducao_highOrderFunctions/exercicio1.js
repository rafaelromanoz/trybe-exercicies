const newEmployees = () => {
  const employees = {
    id1: user('Rafael Romano'),
    id2: user('Luiza Drumond'),
    id3: user('Carla Paiva'),
  };
  return employees;
};
const user = (param) => {
  const string = param.toLowerCase().replace(' ', '_');
  const email = { Nome: param, email: `${string}@trybe.com` };
  return email;
};

console.log(newEmployees());
