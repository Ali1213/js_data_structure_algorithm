
const vertices = Symbol('store vertices');
const adjList = Symbol('adjacency lists');
const Queue = require('./Queue');

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

  bfs(v, cb) {
    let color = Graph.initColor(this[vertices]);
    let queue = new Queue();
    queue.enqueue(v);
    while (!queue.isEmpty()) {
      let u = queue.dequeue(),
        neighbors = this[adjList].get(u);
      color[u] = 'grey';
      neighbors.forEach((item) => {
        if (color[item] == 'white') {
          queue.enqueue(item);
          color[item] = 'grey';
        }
      });

      color[u] = 'black';
      cb && cb(u);
    }
  }

  static initColor(vertices) {
    let color = [];
    vertices.forEach(item => {
      color[item] = 'white';
    });
    return color;
  }

}

module.export = Graph;