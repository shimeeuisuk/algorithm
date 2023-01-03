function s(P) {
  let sH = new Map();
  let answer;
  for (let i of P) {
    if (sH.has(i)) sH.set(i, sH.get(i) + 1);
    else sH.set(i, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

console.log(s("BACBACCACCBDEDE"));
