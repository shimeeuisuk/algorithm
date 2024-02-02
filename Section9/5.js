// BFS 송아지 찾기 (상태트리탐색)
const solution = (s, e) => {
  let check = Array.from({ length: 10001 }, () => 0);
  let distance = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  check[s] = 1;
  queue.push(s);
  distance[s] = 0;

  while (queue.length) {
    // 큐에서 하나 꺼냄, 현재 지점
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      // 다음 지점이 종착점일 때, 현재 지점에 등록된 경로수에 +1을 해주면 다음 지점까지의 경로 수가 나온다.
      if (nx === e) return distance[x] + 1;
      if (nx > 0 && nx <= 10000 && check[nx] === 0) {
        queue.push(nx);
        distance[nx] = distance[x] + 1;
      }
    }
  }
};

// 레벨로 최단 경로 세는거 실패 다시 생각해보기
// const solution = (s, e) => {
//   let check = Array.from({ length: 10001 }, () => 0);

//   let queue = [];
//   check[s] = 1;
//   queue.push(s);
//   let L = 0;

//   while (queue.length) {
//     // 큐에서 하나 꺼냄, 현재 지점
//     let x = queue.shift();

//     for (let nx of [x - 1, x + 1, x + 5]) {
//       // 다음 지점이 종착점일 때, 현재 지점에 등록된 경로수에 +1을 해주면 다음 지점까지의 경로 수가 나온다.
//       if (nx === e) return L + 1;
//       if (nx > 0 && nx <= 10000 && check[nx] === 0) {
//         queue.push(nx);
//       }
//     }
//     L++;
//   }
// };

console.log(solution(5, 14));
