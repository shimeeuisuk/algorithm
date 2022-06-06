//n까지 합
function solution(n) {
  let num = 0;
  for (let i = 1; i <= n; i++) {
    num = num + i;
  }
  return num;
}

console.log(solution(100));
