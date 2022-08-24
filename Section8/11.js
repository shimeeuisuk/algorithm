function movingStuff(stuff, limit) {
  const sortedStuff = stuff.sort((a, b) => a - b);
  console.log(sortedStuff);
  let sum = 0;
  let count = 0;
  let result = 0;
  for (let i = 0; i < sortedStuff.length; i++) {
    sum += sortedStuff[i];
    if (sum > limit || count === 2) {
      sum = sortedStuff[i];
      count = 0;
      result++;
    }
    count++;
  }
  if (count == 1) {
    result++;
  }
  return result;
}
console.log(movingStuff([70, 50, 80, 50], 100));
