class Graph {
  constructor() {
    this.adjacentlist = {};
    this.numberOfNodes = 0;
  }

  // O(1)
  addVertex(node) {
    this.adjacentlist[node] = [];
    this.numberOfNodes++;
  }

  //O(1)
  addEdge(node1, node2) {
    if (!this.adjacentlist[node1].includes[node2]) this.adjacentlist[node1].push(node2);
    if (!this.adjacentlist[node2].includes[node1]) this.adjacentlist[node2].push(node1);
  }

  print() {}
}

const main = () => {
  const graph = new Graph();
  graph.addVertex("0");
  graph.addVertex("1");
  graph.addVertex("2");
  graph.addVertex("3");
  graph.addVertex("4");
  graph.addVertex("5");
  graph.addVertex("6");
  graph.addEdge("3", "1");
  graph.addEdge("3", "4");
  graph.addEdge("4", "2");
  graph.addEdge("4", "5");
  graph.addEdge("1", "2");
  graph.addEdge("1", "0");
  graph.addEdge("0", "2");
  graph.addEdge("6", "5");
};

main();
