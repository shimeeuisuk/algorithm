//문자열의 길이가 짝수면 가운데 두 문자 출력, 홀수면 가운데 문자 출력

function solution(s) {
  let middle = Math.floor(s.length / 2);
  if (s.length % 2 !== 0) {
    return s.substring(middle, middle + 1);
  } else {
    return s.substring(middle - 1, middle + 1);
  }
}
console.log(solution("study"));
console.log(solution("good"));
