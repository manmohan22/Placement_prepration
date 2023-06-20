const minLecture = (M, N) => {
  let reqClasses = Math.ceil(0.75 * M);

  if (N >= reqClasses) {
    return 0;
  } else {
    return reqClasses - N;
  }
};

console.log(minLecture(7, 1));
