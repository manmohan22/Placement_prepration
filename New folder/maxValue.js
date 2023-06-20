const maxValue = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};

console.log(maxValue(22,15,18))
console.log(maxValue(15,22,18))
console.log(maxValue(18,12,22))