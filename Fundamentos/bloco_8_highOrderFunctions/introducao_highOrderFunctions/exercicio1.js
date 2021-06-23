const newEmployees = () => {
  const employees = {
    id1: user('Rafael Romano'),
    id2: user('Luiza Drumond'),
    id3: user('Carla Paiva'),
  };
  return employees;
};
const user = (param) => {
  let string = param.toLowerCase();
  let resultado = string.replace(' ', '_');
  let email = { Nome: param, email: `${resultado}@trybe.com` };
  return email;
};

console.log(newEmployees(user));
