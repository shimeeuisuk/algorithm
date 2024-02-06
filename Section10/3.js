// 최대 부분 증가 수열
// arr : [5, 3, 7, 8, 6, 2, 9, 4]
// dy : [1, 1, 2, 3, 2, 1, 4, 2]
// arr[i]가 부분 증가 수열의 최댓값이라 생각했을 때, 최대 길이 수를 dy[i]에 저장
// arr[i]의 값이 부분 증가 수열의 최댓값일 때, arr[i-1]부터 arr[0]까지 값 중 arr[i]보다 작으면서, dy[i-1]부터 dy[i]중 최대값을 구함.
// 그 값에 +1을 한게 dy[i]의 값이라고 할 수 있다.

const solution = (arr) => {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);

  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
  }

  for (let length of dy) {
    answer = Math.max(answer, length);
  }

  return answer;
};

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
