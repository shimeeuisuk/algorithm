function solution(arr) {
  let count = 0;
  let height = 0;
  for (i = 0; i < arr.length; i++) {
    if (height < arr[i]) {
      height = arr[i];
      count++;
    }
  }
  return count;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
