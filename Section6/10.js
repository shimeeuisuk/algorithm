function movingStuff(stuff, limit) {
  const sortedStuff = stuff.sort((a, b) => a - b);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < sortedStuff.length; i++) {
    while (sum <= limit) {
      sum += sortedStuff[i];
    }
    count++;
    sum = sortedStuff[i];
  }
  return count;
  // TODO: 여기에 코드를 작성합니다.
}

console.log(movingStuff([70, 50, 80, 50], 100));
