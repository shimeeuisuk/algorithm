//백설공주 7난쟁이 몸무게 합은 100 2명의 가짜 난쟁이를 찾아라

function solution(arr) {
  let sum = 0;
  let diff;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  diff = sum - 100;
  for (let x of arr) {
    if (!arr.includes(diff - x, arr)) {
      newArr.push(x);
    }
  }
  return newArr;
  //배열 중 두개의 요소의 합이 = 차이값인 요소를 뺀다. => ex 40 40 -i번째 요소 === arr [i]
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
