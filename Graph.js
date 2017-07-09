
const vertices = Symbol('store vertices');
const adjList = Symbol('adjacency lists');

class Graph {

  constructor() {
    this[vertices] = [];
    this[adjList] = new Map();
  }

  addVertex(x) {
    this[vertices].push(x);
    this[adjList].push(x, []);
  }

  addEdge(v, w) {
    this[adjList].get(v).push(w);
  }

  toString() {
    let s = '';
    for (let i = 0; i < this[vertices].length; i++) {
      s += this[vertices][i] + ' -> ';
      s += adjList.get(this[vertices][i]).join(' ') + '\n';
    }
    return s;
  }

  
}

module.export = Graph;