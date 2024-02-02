// 경로 탐색 (인접행렬)

const solution = (input) => {
  const connection = input.slice(1);
  const n = input[0][0];
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let check = Array.from({ length: n + 1 }, () => 0);
  let answer = 0;
  // 경로 보기 위한코드
  //   let path = [];

  connection.forEach((el) => (graph[el[0]][el[1]] = 1));

  const DFS = (v) => {
    if (v === n) {
      // 경로 보기 위한코드
      //   console.log(path);
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && check[i] === 0) {
          check[i] = 1;
          // 경로 보기 위한코드
          //   path.push(i);
          DFS(i);
          check[i] = 0;
          // 경로 보기 위한코드
          //   path.pop();
        }
      }
    }
  };
  // 경로 보기 위한코드
  //   path.push(1);

  // 시작점 먼저 체크 꼭 하기
  check[1] = 1;
  DFS(1);
  return answer;
};

console.log(
  solution([
    [5, 9],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
