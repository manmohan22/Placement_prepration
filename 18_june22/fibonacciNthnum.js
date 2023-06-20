const fibonacciNthNum = function (N) {
  if (N === 1) return 0;
  else if (N === 2) return 1;
  else {
    let a = 0;
    (b = 1), (c = a + b);
    for (let i = 3; i <= N; i++) {
      (c = a + b), (a = b), (b = c);
    }
    return c
}
};
console.log(fibonacciNthNum(2))