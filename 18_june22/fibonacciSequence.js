const fibonacciSequence = function (num) {
  let a = 0,
    b = 1,
    c = 0;
  c = a + b;
  console.log(a);
  console.log(b);
  while (c < num) {
    console.log(c);
    a = b;
    b = c;
    c = a + b;
  }
};
fibonacciSequence(7);
