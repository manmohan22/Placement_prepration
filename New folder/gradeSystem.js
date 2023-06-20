const gradeSystem = (grade) => {
  if (grade >= 90 && grade < 100) {
    return "A grade";
  } else if (grade >= 80 && grade <= 89) {
    return "B grade";
  } else if (grade >= 60 && grade <= 79) {
    return "C grade";
  } else if (grade >= 33 && grade <= 59) {
    return "D grade";
  } else {
    return "F grade";
  }
};
console.log(gradeSystem(33));
