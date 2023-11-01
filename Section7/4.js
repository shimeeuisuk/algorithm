// 삽입 정렬 - 오름차순 정리
// 처음 i가 돌 때, 임시 변수(tmp)에 arr[i]를 할당시킨다.
// 그 후 j for문을 돌면서(i-1 ~ 0 까지) arr[j]가 tmp보다 크다면 arr[j+1]=arr[j] 이런식으로 다음 index에 복사를 시켜준다.
// j가 다 돌면 즉 j가 -1일 때, arr[j+1]에 tmp를 할당해준다.

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;

    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
      } else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}

console.log(solution([11, 7, 5, 6, 10, 9]));
