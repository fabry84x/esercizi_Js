class Person {
  // ...
  constructor(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
  }
  get name(){
    return this.firstName;
  }
  set name(name){
    this.firstName=name;
  }
  get surname(){
    return this.lastName;
  }
  set surname(surname){
    this.lastName=surname;
  }
  get agenum(){
    return this.age;
  }
  set agenum(agenum){
    this.age=agenum;
  }
  get fullName(){
    return `${this.name} ${this.surname}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);