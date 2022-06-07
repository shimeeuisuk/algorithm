//가위바위보 이기는 사람 출력 (1=가위 2=바위 3=보)
function solution(a, b) {
  const result = [];
  for (i in a) {
    if (b[i] - a[i] === 2 || a[i] - b[i] === 1) {
      result.push("A");
    } else if (a[i] - b[i] === 2 || b[i] - a[i] === 1) {
      result.push("B");
    } else {
      result.push("D");
    }
  }

  return result;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
