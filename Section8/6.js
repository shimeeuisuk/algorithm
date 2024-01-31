// 바둑이 승차
// 강의 풀이
function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

// 내풀이
const solution = (c, arr) => {
  const n = arr.length;
  const total = c;
  let maxWeight = 0;
  const DFS = (L, sum) => {
    if (L === n) {
      if (sum <= total && maxWeight < sum) {
        maxWeight = sum;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  };

  DFS(0, 0);
  return maxWeight;
};

console.log(solution(259, [81, 58, 42, 33, 61]));
