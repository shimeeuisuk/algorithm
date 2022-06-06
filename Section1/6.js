//홀수들의 합과 홀수 중 최솟값 찾기

// function solution(arr) {
//   let oddNums = [];
//   let sum = 0;
//   let min;
//   for (i of arr) {
//     if (i % 2 === 1) {
//       oddNums.push(i);
//     }
//   }
//   min = Math.min(...oddNums);
//   for (n of oddNums) {
//     sum = sum + n;
//   }
//   return [sum, min];
// }

// arr = [12, 77, 38, 41, 53, 92, 85];

// console.log(solution(arr));
function solution(arr) {
  let answer = [];
  let sum = 0,
    min = 1000;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
