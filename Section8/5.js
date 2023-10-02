function solution(arr) {
  let answer = "NO";
  let flag = 0
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  function DFS(L, sum) {
    if(flag) return; 
    if (L === n) {
      if (total - sum === sum) answer = "Yes";
      flag =1;
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}