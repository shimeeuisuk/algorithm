//바로 앞 수 보다 큰 수만 출력
function solution(arr) {
  const result = [arr[0]];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
