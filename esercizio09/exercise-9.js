function getKeys(obj) {
  // ...
  obj=[];
  for(let prop in person){
    obj.push(prop);
  }
  return obj;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);