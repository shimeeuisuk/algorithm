//

const solution = (test) => {
  let answer = 0;
  // 행-테스트 횟수
  const m = test.length;
  // 열-학생수
  const n = test[0].length;

  for (let mento = 1; mento <= m; mento++) {
    for (let menti = 1; menti <= n; menti++) {
      let cnt = 0;

      test.map((grade) => {
        grade.map((student, index) => {
          let mentoGrade = 0;
          let mentiGrade = 0;

          if (student === mento) mentoGrade = index;
          if (student === menti) mentiGrade = index;
        });

        if (mentoGrade < mentiGrade) cnt++;
      });

      if (cnt === m) answer++;
    }
  }

  return answer;
};

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
