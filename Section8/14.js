// 조합 구하기

const solution = (n, r) => {
  const combi = Array.from({ length: 2 }, () => 0);
  let answer = [];
  const DFS = (L, s) => {
    if (L === r || s === n) {
      answer.push(combi.slice());
    } else {
      for (let i = s; i <= n; i++) {
        combi[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  };
  DFS(0, 1);
  answer.push(answer.length);
  return answer;
};

console.log(solution(4, 2));
