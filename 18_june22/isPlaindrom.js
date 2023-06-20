const isPlalindrom = function (num) {
  let copy = num;
  let temp = 0;
  while (copy > 0) {
    temp = temp * 10 + (copy % 10);
    copy = Math.floor(copy / 10);
  }
  return temp === num;
};
console.log(isPlalindrom(121));
console.log(isPlalindrom(17));
