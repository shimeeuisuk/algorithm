const solution = (total, arr) => {
  let answer = [];
  arr.map((num) => {
    let reverseNum = Number(
      num
        .toString()
        .split("")
        .reverse()
        .reduce((a, b) => a + b)
    );

    console.log(reverseNum);

    if (isPrime(reverseNum)) answer.push(reverseNum);
  });
  return answer;
};

// 소수 구하기
const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));
