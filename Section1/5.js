//최솟값찾기

// function solution(arr) {
//   let answer = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     answer = Math.min(answer, arr[i]);
//   }
//   return answer;
// }

// let arr = [5, 7, 1, 3, 2, 9, 11];
// console.log(solution(arr));

function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
