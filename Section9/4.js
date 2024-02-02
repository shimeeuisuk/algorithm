// BFS 이진트리 넓이 우선 탐색
const solution = () => {
  let answer = "";
  let queue = [];
  queue.push(1);

  while (queue.length > 0) {
    let v = queue.shift();
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
};

console.log(solution());
