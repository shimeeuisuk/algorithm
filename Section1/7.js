// function solution(day, arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (String(arr[i])[1] === String(day)) {
//       count++;
//     }
//   }
//   return count;
// }

// arr = [25, 23, 11, 47, 53, 17, 33];
// console.log(solution(7, arr));

function solution(day, arr) {
  let count = 0;
  for (let i of arr) {
    if (i % 10 === day) {
      count++;
    }
  }
  return count;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(7, arr));
