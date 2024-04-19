let inputString = "";
let currentLine = 0;

class Graph {
  constructor() {
    this.adajacentList = {};
  }

  createEdge(u, v) {
    if (!this.adajacentList[u]) this.adajacentList[u] = [];
    if (!this.adajacentList[v]) this.adajacentList[v] = [];
    this.adajacentList[u].push(v);
    this.adajacentList[v].push(u);
  }

  bfs(start, n) {
    let queue = [];
    let visited = {};
    let dist = new Array(parseInt(n + 1, 10)).fill(-1);

    queue.push({ value: start, distance: 0 });
    dist[start] = 0;
    visited[start] = true;

    while (queue.length) {
      const { value, distance } = queue.shift();
      for (const v of this.adajacentList[value]) {
        if (!visited[v]) {
          queue.push({ value: v, distance: distance + 6 });
          dist[v] = distance + 6;
          visited[v] = true;
        }
      }
    }
    dist.shift();
    return dist
      .filter((num) => num != "0")
      .join(" ")
      .trim();
  }
}

function processData(input) {
  inputString = input.split("\n");

  const q = parseInt(readLine(), 10);

  for (let i = 0; i < q; i++) {
    const graph = new Graph();
    const [n, m] = readLine().split(" ");
    for (let j = 0; j < parseInt(m, 10); j++) {
      const [u, v] = readLine().split(" ");
      graph.createEdge(u, v);
    }

    const s = parseInt(readLine().trim(), 10);

    console.log(graph.bfs(s, parseInt(n, 10)));
  }
}

const readLine = () => {
  return inputString[currentLine++];
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
