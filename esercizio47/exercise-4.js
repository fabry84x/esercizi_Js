const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

for (let [item1,item2] of Object.entries(person)) {
  console.log(`${item1}: ${item2}`);
}