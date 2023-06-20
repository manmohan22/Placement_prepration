const pramidPattern = function (n) {
  for (let i = 1; i <= n; i++) {
    let space = "";
    for (let j = 1; j <= n - i; j++) {
      space = space + " ";
    }
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "* ";
    }
    console.log(space + star);
  }
};

pramidPattern(9)