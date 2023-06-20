const rightAngle = (num) => {
  for (let i = 0; i <= num; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    console.log(str);
  }
};

const recursionPattern = (i, num) => {
  console.log("*".repeat(i));
  i--;
  if (i >= num) {
    recursionPattern(i, num);
  }
};
recursionPattern(9,1);

// rightAngle(5);
