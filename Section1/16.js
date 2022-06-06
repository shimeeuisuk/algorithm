// 문자중 중복된 문자 제거
function solution(s) {
  let result = "";
  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      result = result + s[i];
    } // 만약 result에 i가 없다면 넣는다.
  }
  return result;
}
console.log(solution("ksekkset"));
