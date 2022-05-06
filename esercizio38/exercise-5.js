class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  get balance(){
    return this.#amount;
  }

  set balance(interest){
    this.#amount=interest;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class BankAccountVip extends BankAccount{
  constructor(initialAmount,interest){
    super(initialAmount);
    this.interest=interest;
  }
  deposit(interest){
    if(this.balance>=1000){
      interest+=(interest*3)/100;
      this.balance+=interest;
    }
    else{
      this.balance+=interest;
    }
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();