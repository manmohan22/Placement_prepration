const knowSequence = (num1, num2, num3) => {
  if (num1 < num2 && num2 < num3) {
    return "incressing sequence";
  } else if (num1 > num2 && num2 > num3) {
    return "decressing sequence";
  } else {
    return "not incressing & decressing order";
  }
};

console.log(knowSequence(12, 15, 18));
console.log(knowSequence(22, 15, 8));
console.log(knowSequence(12, 55, 18));
console.log(knowSequence(1, 1, 1));
