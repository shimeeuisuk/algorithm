function s(start, end) {
  const dis = Array.from({ length: 10001 }, () => 0);
  const check = Array.from({ length: 10001 }, () => 0);
  const queue = [];
  dis[start] = 0;
  check[start] = 1;
  queue.push(start);
  while (queue.length) {
    let v = queue.shift();
    for (let nv of [v - 1, v + 1, v + 5]) {
      if (nv === end) return dis[v] + 1;
      if (nv > 0 && nv <= 10000 && check[nv] === 0) {
        check[nv] = 1;
        queue.push(nv);
        dis[nv] = dis[v] + 1;
      }
    }
  }
}

console.log(s(5, 14));
