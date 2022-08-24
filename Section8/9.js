// function rockPaperScissors() {
//   const M = 3;
//   const N = 2;
//   total = [];
//   function DFS(L, res) {
//     console.log("parma", L, res);
//     if (N === L) {
//       total.push(res);
//       return;
//     }

//     for (let i = 1; i <= M; i++) {
//       res.push(i);
//       rockPaperScissors(L + 1, [...res]);
//       res.pop();
//     }
//   }
//   DFS(0, []);
//   return total;
// }

// console.log(a());

function rockPaperScissors() {
  const N = 3;
  const arr = ["rock", "paper", "scissors"];
  const total = [];
  function DFS(L, res) {
    if (N === L) {
      total.push(res);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i]);
      DFS(L + 1, [...res]);
      res.pop();
    }
  }
  DFS(0, []);
  return total;
}

console.log(rockPaperScissors());
