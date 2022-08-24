const M = 4;
const N = 3;

function Permutation(L, res) {
  if (L === N) {
    return res;
  }
  const result = [];
  for (let i = 1; i <= M; i++) {
    const r = Permutation(L + 1, res + i.toString());
    result.push(r);
  }
  return [...result];
}

console.log(Permutation(0, ""));
