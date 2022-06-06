//배열의 요소들인 문자들 중 길이가 가장 긴 문자 출력
function solution(s) {
  let longgest = "";
  for (x of s) {
    if (x.length > longgest.length) {
      longgest = x;
    }
  }
  return longgest;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
