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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here

function fetchPersonById(id) {
  return new Promise((resolve,reject) => {
    setTimeout(() => { 
      const person=persons.find(item => item.id === id);
      if(person) {
        resolve(person);
      } else {
      reject(new Error("non esiste una persona con questo id"));
        }
    }, 1000);
  });
}

function fetchJobById(id) {
  return new Promise((resolve,reject) => {
    setTimeout(() => { 
      const job=jobs.find(item => item.id === id);
      if(job) {
        resolve(job);
      } else {
      reject(new Error("non esiste un job con questo id"));
        }
    }, 1000);
  });
}

Promise.all([fetchPersonById(3),fetchJobById(3)])
.then((ids)=>console.log(ids))
.catch((err)=>console.log(err))