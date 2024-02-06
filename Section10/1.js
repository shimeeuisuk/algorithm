// 계단오르기(DP)
const solution = (stair) => {
  let dy = Array.from({ length: stair + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= stair; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  return dy[stair];
};

console.log(solution(7));
