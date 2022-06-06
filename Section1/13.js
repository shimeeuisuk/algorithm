// 대문자는 소문자로 소문자는 대문자로 변환

function solution(s) {
  let answer = "";
  for (i of s) {
    if (i.toUpperCase() === i) {
      i = i.toLowerCase();
    } else {
      i = i.toUpperCase();
    }
    answer = answer + i;
  }

  return answer;
}

console.log(solution("StuDY"));
