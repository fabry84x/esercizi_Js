function memoize(fn) {
  let cache = {};
  // ...
  return function(num){
    if(cache[num]){
      console.log("Fetching from cache for "+cache[num]);
      return cache[num];
    }
    else {
      let result=fn(num);
      cache[num]=result;
      console.log("calculating result for "+cache[num]);
      return result;
    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));