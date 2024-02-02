// 섬나라 아일랜드 (DFS)
// 재귀 호출 회수 = 섬갯수
const solution = (arr) => {
  let n = arr[0];
  let islandBoard = arr.slice(1);
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let answer = 0;

  const DFS = (x, y) => {
    // 출발지점 체크
    islandBoard[x][y] = 0;
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && islandBoard[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 섬 찾음
      if (islandBoard[i][j] === 1) {
        // 재귀 도는 회수가 섬 갯수
        answer++;
        DFS(i, j);
      }
    }
  }

  return answer;
};

let arr = [
  7,
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
