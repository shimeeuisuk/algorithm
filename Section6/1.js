// function solution(s) {
//   let answer = "YES";
//   const stack = [];
//   for (let x of s) {
//     if (x === "(") stack.push(x);
//     else {
//       if (stack.length === 0) return "NO";
//       stack.pop();
//     }
//   }
//   if (stack.length > 0) return "NO";
//   return answer;
// }
// console.log(solution("(()(()))()")); //Yes
// console.log(solution("(())())")); //NO
// console.log(solution("(())(()")); //NO
// console.log(solution("(()(()))((")); //YES

function solution(s) {
  let answer = "YES";
  const stack = [];
  for (i of s) {
    if (i === "(") stack.push("(");
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
}
console.log(solution("(()(()))()")); //Yes
console.log(solution("(())())")); //NO
console.log(solution("(())(()")); //NO
console.log(solution("(()(()))((")); //YES
