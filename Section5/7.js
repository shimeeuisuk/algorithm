function s(str1, str2) {
  let sH1 = new Map();
  for (let i of str1) {
    if (sH1.has(i)) sH1.set(i, sH1.get(i) + 1);
    else sH1.set(i, 1);
  }
  for (let x of str2) {
    if (!sH1.has(x) || sH1.get(x) == 0) return "NO";
    sH1.set(x, sH1.get(x) - 1);
  }
  return "YES";
}

let a = "aaab";
let b = "aabb";
console.log(s(a, b));
