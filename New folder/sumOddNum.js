const sumOddNum = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i += 2) {
    sum += i;
  }
  return sum;
};
console.log(sumOddNum(5));
console.log(sumOddNum(7));
console.log(sumOddNum(10));
// 14 june