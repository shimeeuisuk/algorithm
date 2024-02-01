// 조합의 경우수(메모제이션)

// 내풀이
const solution = (n, r) => {
  let answer;
  let memo = Array.from(Array(35), () => Array(35).fill(0));
  const DFS = (n, r) => {
    if (memo[n][r] > 0) return memo[n][r];
    if (n === r || r === 0) return 1;
    else return (memo[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  };
  answer = DFS(n, r);
  return answer;
};

console.log(solution(30, 3));
