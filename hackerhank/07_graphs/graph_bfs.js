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

  bfs(start) {
    let queue = [];
    let visited = {};

    queue.push(start);

    while (queue.length) {
      const u = queue.shift();
      for (const v of this.adajacentList[u]) {
        if (!visited[v]) {
          console.log(u, " -> ", v);
          queue.push(v);
          visited[v] = true;
        }
      }
    }
  }

  dfs(start) {
    let visited = {};
    this.dfsAux(start, visited);
  }

  dfsAux(u, visited) {
    visited[u] = true;
    for (const v of this.adajacentList[u]) {
      if (!visited[v]) {
        console.log(u, " -> ", v);
        visited[v] = true;
        this.dfsAux(v, visited);
      }
    }
  }

  print() {
    const nodes = Object.keys(this.adajacentList);
    for (const u of nodes) {
      for (const v of this.adajacentList[u]) {
        console.log(`${u} -> ${v}`);
      }
    }
  }
}

const main = () => {
  const graph = new Graph();
  graph.createEdge("0", "2");
  graph.createEdge("0", "4");
  graph.createEdge("0", "5");
  graph.createEdge("1", "4");
  graph.createEdge("1", "5");
  graph.createEdge("2", "3");
  graph.createEdge("2", "4");
  graph.createEdge("4", "5");
  //graph.bfs(3);
  //graph.dfs(5);
  graph.print();
};

main();
console.log(Array(5).fill(-1))