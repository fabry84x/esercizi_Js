function calculate() {
  // ...
  let total = 0;
  return {
    add: function(num){
      total+=num;
      return this;
    },
    multiply: function(num){
      total*=num;
      return this;
    },
    sub: function(num){
      total-=num;
      return this;
    },
    divide: function(num){
      total/=num;
      return this;
    },
    printResult: function(){
      console.log(total);
    }
  }
}
const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
