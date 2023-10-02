const searchMaxSum = (count, arr) => {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  arr.map((el) => {
    let sum = el
      .toString()
      .split("")
      .reduce((a, b) => Number(a) + Number(b));

    if (sum >= max) {
      max = sum;
      answer = el;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  });
  return answer;
};

console.log(searchMaxSum(7, [128, 460, 603, 40, 521, 137, 123]));
