function solution(a, b, c) {
  let num = 0;
  if (a < b) {
    num = a;
  } else {
    num = b;
  }
  if (num > c) {
    num = c;
  }
  return num;
}

console.log(solution(2, 5, 1));
