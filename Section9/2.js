// 경로 탐색 (인접 리스트) - 노드 갯수 많을 때

const solution = (input) => {
  const connection = input.slice(1);
  const n = input[0][0];
  let graph = Array.from({ length: n + 1 }, () => []);
  let check = Array.from({ length: n + 1 }, () => 0);
  let answer = 0;

  connection.forEach((el) => graph[el[0]].push(el[1]));

  const DFS = (v) => {
    if (v === n) answer++;
    else {
      for (let i = 0; i < graph[v].length; i++) {
        if (check[graph[v][i]] === 0) {
          check[graph[v][i]] = 1;
          DFS(graph[v][i]);
          check[graph[v][i]] = 0;
        }
      }
    }
  };

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
