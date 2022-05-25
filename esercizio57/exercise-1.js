const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  // code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      if (person) {
        resolve(person);
      }
      else {
        reject(new Error("questo id non esiste"));
      }
    }, 1000);
  });
}
// code here
let promise = fetchPersonById(1);
promise
  .then((id) => {
    console.log(id);
  })
  .catch((e) => {console.log(e);
  })
