
const vertices = Symbol('store vertices');
const adjList = Symbol('adjacency lists');
const Queue = require('./Queue');

class Graph {

  constructor() {
    this[vertices] = [];
    this[adjList] = new Map();
  }

  getVertices() {
    return [...this[vertices]];
  }

  getAdjList(v) {
    return [...this[adjList].get(v)];
  }

  addVertex(x) {
    this[vertices].push(x);
    this[adjList].set(x, []);
  }

  addEdge(v, w) {
    this[adjList].get(v).push(w);
    this[adjList].get(w).push(v);
  }

  toString() {
    let s = '';
    for (let i = 0; i < this[vertices].length; i++) {
      s += this[vertices][i] + ' -> ';
      s += this[adjList].get(this[vertices][i]).join(' ') + '\n';
    }
    return s;
  }

  //广度优先搜索
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

  // 寻找最短路径
  BFS(v) {

    let color = Graph.initColor(this[vertices]),
      queue = new Queue(),
      d = {},
      pred = {};

    queue.enqueue(v);

    this[vertices].forEach(item => {
      d[item] = 0;
      pred[item] = null;
    });


    while (!queue.isEmpty()) {
      let u = queue.dequeue(),
        neighbors = this[adjList].get(u);
        
      color[u] = 'grey';
      neighbors.forEach((item) => {
        if (color[item] == 'white') {
          queue.enqueue(item);
          color[item] = 'grey';

          d[item] = d[u] + 1;
          pred[item] = u;

        }
      });

      color[u] = 'black';
    }


    return {
      distances: d,
      predecessors: pred
    };
  }

  //深度优先搜索
  dfs(cb) {
    let color = Graph.initColor(this[vertices]),
      _this = this;

    const defVisit = function (u, color, cb) {

      color[u] = 'grey';

      cb && cb(u);


      _this[adjList].get(u).forEach(item => {

        if (color[item] === 'white') {
          defVisit(item, color, cb);
        }
      });

      color[u] = 'black';

    };

    this[vertices].forEach(item => {

      if (color[item] === 'white') defVisit(item, color, cb);

    });


  }

  static initColor(vertices) {
    let color = [];
    vertices.forEach(item => {
      color[item] = 'white';
    });
    return color;
  }

}

module.exports = Graph;