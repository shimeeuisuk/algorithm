// 재귀함수를 이용한 이진수 출력

// 문제: 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요.

const solution = (n) => {
  let answer = "";

  function DFS(L) {
    if (L === 0) return;
    else {
      let nextParam = Math.floor(L / 2);

      DFS(nextParam);
      answer += L % 2;
    }
  }

  DFS(n);
  return answer;
};

console.log(solution(11));
