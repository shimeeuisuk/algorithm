//n은 종착노드

function s(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let check = Array.from({ length: n + 1 }, () => 0);
  //인접 행렬 만들기
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  function DFS(v) {
    if (v === n) answer++;
    else {
      for (let i = 1; i <= n; i++) {
        // 아직 안지났고, 연결되어 있으면
        if (check[i] === 0 && graph[v][i] === 1) {
          check[i] = 1; //체크한다.
          DFS(i); //i 노드로 간다.
          check[i] = 0; // 다시 빽하는것
        }
      }
    }
  }
  check[1] = 1; // 첫번째 꼭 체크 실수 많이 함.
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(s(5, arr));
