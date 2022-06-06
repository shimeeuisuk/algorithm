//'A'를 '#'으로 바꾸기

function solution(s) {
  let result = "";
  for (i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      result = result + "#";
    } else {
      result = result + s[i];
    }
  }
  return result;
}

let str = "BANANA";
console.log(solution(str));
