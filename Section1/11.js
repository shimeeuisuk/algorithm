//대문자의 갯수는?
function solution(s) {
  let count = 0;
  for (i of s) {
    if (i.toUpperCase() === i) {
      count++;
    }
  }
  return count;
}

let str = "KoreaTimeGood";
console.log(solution(str));
