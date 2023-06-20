// WAP an integer, num. Output a pair of numbers( a,b) such that a+b= num and both are prime numbers?

// Input= 15
// Output= 2,13

const sumPrime = function (num) {
  for (let a = 2; a < num; a++) {
    let b = num - a;
    if (isPrime(a) && isPrime(b)) {
      return [a, b];
    }
  }
  return "no prime pair found";
};
const isPrime = function (num) {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(sumPrime(17));
console.log(sumPrime(4));
console.log(sumPrime(17));
