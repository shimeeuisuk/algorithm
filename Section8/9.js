// 동전 교환

const solution = (input) => {
  const coinTypeCount = input[0];
  const coinType = input[1];
  let totalPrice = input[2];
  let minCount = Number.MAX_SAFE_INTEGER;

  const DFS = (L, sumPrice) => {
    if (sumPrice > totalPrice) return;
    if (sumPrice === totalPrice) {
      minCount = Math.min(minCount, L);
    } else {
      for (let i = 0; i < coinTypeCount; i++) {
        DFS(L + 1, sumPrice + coinType[i]);
      }
    }
  };

  DFS(0, 0);
  return minCount;
};

console.log(solution([3, [1, 2, 5], 15]));
