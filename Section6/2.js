function solution(s) {
  let answer;
  const stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
