// 입력된 문자열 중 입력된 알파벳의 갯수는?

function solution(s, t) {
  let count = 0;
  for (i of s) {
    if (t === i) {
      count++;
    }
  }
  return count;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
