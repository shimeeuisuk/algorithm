// 최대점수 구하기(DFS)

// 내 풀이
const solution = (input) => {
  const questionCount = input[0][0];
  let limitTime = input[0][1];
  const quesetionData = input.slice(1);
  let maxScore = 0;

  const DFS = (v, score, time) => {
    if (time > limitTime) return;
    if (v === questionCount) {
      if (time <= limitTime && score > maxScore) maxScore = score;
    } else {
      DFS(v + 1, score + quesetionData[v][0], time + quesetionData[v][1]);
      DFS(v + 1, score, time);
    }
  };

  DFS(0, 0, 0);
  return maxScore;
};

console.log(
  solution([
    [5, 20],
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
