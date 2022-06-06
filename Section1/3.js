//n명의 학생들에게 연필 1개씩 나눠줄 때 필요한 연필 다스단위 갯수?
function solution(n) {
  let das = n / 12;
  if (n % 12 !== 0) {
    das = Math.floor(das) + 1;
    return das;
  }
  return das;
}

console.log(solution(25));
console.log(solution(178));
console.log(solution(36));
