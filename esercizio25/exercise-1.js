const person = {
  // ...
  name:"",
  surname:"",
  set firstName(firstName){
    this.name=firstName;
  },
  set lastName(lastName){
    this.surname=lastName;
  },
  fullName(){
    return this.name+" "+this.surname;
  }
}

let john = Object.create(person);
let simon = Object.create(person);

john.firstName='John';
john.lastName='Doe';

simon.firstName='Simon';
simon.lastName='Collins';

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins