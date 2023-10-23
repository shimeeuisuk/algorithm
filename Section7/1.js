// 선택 정렬 - 오름차순 배열 만들기
// 배열 중 한 index를 선택한 후, 나머지 index를 탐색하며 비교
// 탐색 후 가장 작은 수와 배열의 첫번째 index에 있던 값의 자리(index)를 바꾼다.
// 다음 두번 째 index를 선택한 후, 이후 나머지 index의 값을 탐색하고 상기의 과정을 반복한다.

// 시도해 봤던 내 풀이
// const solution = (arr) => {
//   let i = 0;

//   const answer = [];

//   for (let i = 0; i < arr.length; i++) {
//     let pick = arr[i];

//     arr.forEach((el, index) => {
//       if (index > i) {
//         if (el <= pick) {
//           pick = el;
//         }
//       }
//     });
//     answer.push(pick);
//     i++;
//   }

//   return answer;
// };

//정석 풀이
const solution = (arr) => {
  const answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    // 돌면서 최솟값의 위치 저장
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    // 값 서로 바꿈
    [arr[idx], arr[i]] = [arr[i], arr[idx]];
  }
  return answer;
};

console.log(solution([13, 5, 11, 7, 23, 15]));
