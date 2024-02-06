// 돌다리 건너기
const solution = (n) => {
  let answer;
  let dy = Array.from({ length: n + 2 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  answer = dy[n + 1];
  return answer;
};

console.log(solution(7));
