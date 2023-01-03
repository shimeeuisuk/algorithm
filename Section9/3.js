//n은 종착노드

function s(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let check = Array.from({ length: n + 1 }, () => 0);
  //인접 리스트 만들기
  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) answer++;
    else {
      for (let i = 0; i < graph[v].length; i++) {
        //이제 당연히 가니까 체크만 확인 하면 됨
        if (check[graph[v][i]] === 0) {
          check[graph[v][i]] = 1; //체크한다.
          DFS(graph[v][i]); //i 노드로 간다.
          check[graph[v][i]] = 0; // 다시 빽하는것
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
