// 합이 같은 부분집합
// 강의 풀이
function solution(arr) {
  let answer = "NO";
  let flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "Yes";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

// 내 풀이

const solution = (input) => {
  const count = input[0];
  const set = input[1];

  let check = new Array(count).fill(0);
  let answer = [];

  const DFS = (v) => {
    // if문은 트리 바닥을 찍는 조건
    if (v === count) {
      let checkedSum = 0;
      let uncheckedSum = 0;
      check.map((el, index) => {
        if (el === 1) {
          checkedSum += set[index];
        } else {
          uncheckedSum += set[index];
        }
      });

      if (checkedSum === uncheckedSum) answer.push("YES");
      else answer.push("NO");
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  };

  DFS(0);

  if (answer.includes("YES")) return "YES";
  else return "NO";
};

console.log(solution([6, [1, 3, 5, 6, 7, 10]]));

// 내 풀이는 모든 경우의 부분 집합을 나눈 후 두개의 합이 같은 경우가 있으면 YES를 출력하도록 함.
// 강의 풀이는 원소의 총 합을 구한 후 부분 총 합에서 한 부분집학의 합을 뺀경우가 나머지와 같을 경우 YES를 출력하도록 함.
