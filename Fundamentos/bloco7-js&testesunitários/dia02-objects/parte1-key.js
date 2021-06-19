const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
customer2['cachorro'] = 'Chico';
console.log(customer2);

console.log(
  '-----------------------------------------------------------------------------------------------------'
);

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

console.log(
  '-------------------------------------------------------------------------------------------------------'
);

const objetoPassado = {
  nome: 'Rafael',
  cpf: '12150082608',
};

const key = 'age';
const valor = '28';
const parte1 = (objeto, chave, valor) => {
  objeto[chave] = valor;
  return objeto;
};

console.log(parte1({ nome: 'Rafael' }, 'age', 72));
