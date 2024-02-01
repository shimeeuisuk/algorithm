// 중복 순열 구하기

const solution = (N, M) => {
  const tmpArray = [];
  let answer = [];
  const DFS = (L) => {
    if (L === M) {
      //   console.log(tmpArray);
      answer.push(tmpArray.slice());
    } else {
      for (let i = 1; i <= N; i++) {
        tmpArray[L] = i;
        DFS(L + 1);
      }
    }
  };
  DFS(0);
  return answer;
};

console.log(solution(3, 2));
