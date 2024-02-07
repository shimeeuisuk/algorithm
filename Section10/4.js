// 동전교환 (냅색 알고리즘)
const solution = (input) => {
  const coins = input[0];
  const totalAmount = input[1];
  let dy = Array.from({ length: totalAmount + 1 }, () => 1000);
  dy[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= totalAmount; j++) {
      dy[j] = Math.min(dy[j - coins[i]] + 1, dy[j]);
    }
  }

  return dy[totalAmount];
};

console.log(solution([[1, 2, 5], 15]));
