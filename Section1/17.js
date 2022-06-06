//배열 중 중복된 문자 제거
function solution(s) {
  let result = [];
  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      result.push(s[i]);
    } // 만약 result에 i가 없다면 넣는다.
  }
  return result;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
