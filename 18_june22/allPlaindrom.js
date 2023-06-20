const allPlindrom = function (num) {
  for (let i = 1; i <= num; i++) {
    let copy = i;
    let temp = 0;
    while (copy > 0) {
      temp = temp * 10 + (copy % 10);
      copy = Math.floor(copy / 10);
    }
    if (temp === i) {
      console.log(i);
    }
  }
};
allPlindrom(121);
