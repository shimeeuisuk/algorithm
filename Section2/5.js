function solution2(arr) {
  const grade = {};
  const newArr = [...arr];
  newArr.sort((a, b) => b - a);
  let rank = 1;
  for (const score of newArr) {
    if (!(String(score) in grade)) {
      grade[String(score)] = rank;
    }
    rank += 1;
  }
  console.log(grade);

  const result = [];
  for (const score of arr) {
    const newRank = grade[String(score)];
    result.push(newRank);
  }
  return result;
}

let arr = [80, 98, 100, 100, 98];
console.log(solution2(arr));
