const { links } = require("express/lib/response");

function solution(arr) {
  let rightsum = 0;
  let leftsum = 0;
  let rowsum = 0;
  let colsum = 0;
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[r].length; c++) {
      if (r === c) {
        rightsum += arr[r][c];
      }
      if (r === 4 - c) {
        leftsum += arr[r][4 - r];
      }
    }
  }
  for (let r = 0; r < arr.length; r++) {
    let rsum = 0;
    let csum = 0;
    for (let c = 0; c < arr[r].length; c++) {
      rsum += arr[r][c];
      csum += arr[c][r];
    }
    rowsum = Math.max(rowsum, rsum);
    colsum = Math.max(colsum, csum);
  }
  return Math.max(rightsum, leftsum, rowsum, colsum);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
