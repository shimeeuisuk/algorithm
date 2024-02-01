// 순열

const solution = (input) => {
  const N = input[0][0]; // 3
  const M = input[0][1]; // 2
  const num = input[1];
  let tmpArray = [];
  // 전에 사용한 숫자 체크
  let check = new Array(N).fill(0);
  let answer = [];

  const DFS = (L) => {
    if (L === M) {
      answer.push(tmpArray.slice());
    } else {
      for (let i = 0; i < N; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          tmpArray[L] = num[i];
          DFS(L + 1);
          check[i] = 0;
        }
      }
    }
  };

  DFS(0);
  answer.push(answer.length);
  return answer;
};

console.log(
  solution([
    [3, 2],
    [3, 6, 9],
  ])
);
