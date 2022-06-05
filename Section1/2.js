function solution(a, b, c) {
  const maxNum = Math.max(a, b, c);
  const total = a + b + c;

  if (total - maxNum > maxNum) {
    return "YES";
  }
  return "NO";
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
