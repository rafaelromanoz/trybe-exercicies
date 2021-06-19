
const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
person.age='12'
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);

const starships={
  option1:'Tardis',
  option2:'Milennium Falcon'
}

const deucerto=Object.assign({},starships,person)

console.log(deucerto)
