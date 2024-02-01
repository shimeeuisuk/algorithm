// 수열 추측하기(파스칼 삼각형, 이항계수(콤비네이션) 응용)

const solution = (n, total) => {
  let memo = Array.from(Array(15), () => Array(15).fill(0));
  let combinationArray = [];
  let permutationArray = Array.from({ length: n }, () => 0);
  let check = Array.from({ length: n + 1 }, () => 0);
  let answer,
    flag = 0;

  // nCr 콤비네이션 값 구하는 함수
  const combination = (n, r) => {
    if (n === r || r === 0) return 1;
    if (memo[n][r] > 0) return memo[n][r];
    else {
      return (memo[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
    }
  };

  // 콤비네이션 값들의 조합 배열 만드는 for문 (n=4라면, 3C0~3C3까지의 값을 배열에 넣음)
  for (let i = 0; i < n; i++) {
    combinationArray.push(combination(n - 1, i));
  }

  // 순열 돌리면서 (ex. 1,2,3,4 순열) 각각 콤비네이션 값과 곱한 합 구하기
  const DFS = (L, sum) => {
    if (flag === 1) return;
    if (L === n && sum === total) {
      answer = permutationArray.slice();
      flag = 1;
    } else {
      for (let j = 1; j <= n; j++) {
        if (check[j] === 0) {
          check[j] = 1;
          permutationArray[L] = j;
          DFS(L + 1, sum + combinationArray[L] * permutationArray[L]);
          check[j] = 0;
        }
      }
    }
  };

  DFS(0, 0);
  return answer;
};

console.log(solution(4, 16));
