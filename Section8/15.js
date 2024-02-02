// 수들의 조합

const solution = (input) => {
  const n = input[0][0];
  const r = input[0][1];
  const num = input[1].slice();
  num.unshift(0);
  const divisor = input[2];
  let count = 0;

  const DFS = (L, s, sum) => {
    if (L === r) {
      if (sum % divisor === 0) {
        count++;
      }
    } else {
      for (let i = s; i <= n; i++) {
        DFS(L + 1, i + 1, sum + num[i]);
      }
    }
  };

  DFS(0, 1, 0);
  return count;
};

console.log(solution([[5, 3], [2, 4, 5, 8, 12], 6]));
