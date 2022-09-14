function solution(v) {
  function DFS(v) {
    if (v > 7) {
      //종착지점
      return;
    } else {
      //재귀 뻗는 지점
      DFS(v * 2);
      DFS(v * 2 + 1);
      console.log(v);
    }
  }
  DFS(v);
}

console.log(solution(1));
