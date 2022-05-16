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
  return new Promise((resolve)=>{
    setTimeout (() => {
      resolve(id);
    }, 1000);
  });   
}
// code here
let promise = fetchPersonById(1);
promise
.then((id) => {
  if(id===1){
    console.log(persons[0]);
  }
  if(id===2){
    console.log(persons[1]);
  }
  if(id===3){
    console.log(persons[2]);
  }
})