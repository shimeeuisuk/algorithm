function solution(arr) {
  const scorearr = [arr[0]];
  let score = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] === 0) {
      score = 0;
      arr[i] = score;
      scorearr.push(arr[i]);
    } else if (arr[i] === 1 && arr[i - 1] === 0) {
      score = 1;
      arr[i] = score;
      scorearr.push(arr[i]);
    } else if (arr[i] === 1 && scorearr[i - 1] !== 0) {
      score = score + 1;
      arr[i] = score;
      scorearr.push(arr[i]);
    }
  }
  let total = 0;
  for (j of scorearr) {
    total = total + j;
  }
  return total;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
