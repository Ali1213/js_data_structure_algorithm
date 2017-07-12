const Graph = require('../Graph');
const should = require('should');


describe('/test/Graph-test.js', function () {

  let graph,
    graphFinish;

  beforeEach(function () {
    graph = new Graph();
    graphFinish = new Graph();
    let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    for (let item of myVertices) {
      graphFinish.addVertex(item);
    }

    graphFinish.addEdge('A', 'B');
    graphFinish.addEdge('A', 'C');
    graphFinish.addEdge('A', 'D');
    graphFinish.addEdge('C', 'D');
    graphFinish.addEdge('C', 'G');
    graphFinish.addEdge('D', 'G');
    graphFinish.addEdge('D', 'H');
    graphFinish.addEdge('B', 'E');
    graphFinish.addEdge('B', 'F');
    graphFinish.addEdge('E', 'I');
  });

  it('should add vertex & empty edge when addVertex()', function () {

    let VERTEX = 'A';

    graph.addVertex(VERTEX);
    graph.getVertices().should.deepEqual([VERTEX]);
    should.deepEqual(graph.getAdjList(VERTEX), []);

  });

  it('should add edge when addEage()', function () {

    let VERTEX = 'A';
    graph.addVertex(VERTEX);
    graph.addVertex('B');
    graph.addEdge(VERTEX, 'B');

    graph.getAdjList(VERTEX).should.deepEqual(['B']);
    graph.getAdjList('B').should.deepEqual([VERTEX]);

    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addEdge(VERTEX, 'C');
    graph.addEdge(VERTEX, 'D');
    graph.addEdge(VERTEX, 'E');

    graph.getAdjList(VERTEX).should.deepEqual(['B', 'C', 'D', 'E']);
    graph.getAdjList('C').should.deepEqual([VERTEX]);
    graph.getAdjList('D').should.deepEqual([VERTEX]);
    graph.getAdjList('E').should.deepEqual([VERTEX]);

  });



  it('should return graph construct when toString()', function () {

    graphFinish.toString().should.equal(
      'A -> B C D' + '\n' +
      'B -> A E F' + '\n' +
      'C -> A D G' + '\n' +
      'D -> A C G H' + '\n' +
      'E -> B I' + '\n' +
      'F -> B' + '\n' +
      'G -> C D' + '\n' +
      'H -> D' + '\n' +
      'I -> E' + '\n'
    );


  });

  it('should breadth-first search when bfs()', function () {
    let results = [];
    graphFinish.bfs('A', (r) => {
      results.push(r);
    });

    results.should.deepEqual(
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    );
  });

  it('should return distances and predecessors when BFS()', function () {
    graphFinish.BFS('A').should.deepEqual({
      'distances': {
        'A': 0,
        'B': 1,
        'C': 1,
        'D': 1,
        'E': 2,
        'F': 2,
        'G': 2,
        'H': 2,
        'I': 3
      },
      'predecessors': {
        'A': null,
        'B': 'A',
        'C': 'A',
        'D': 'A',
        'E': 'B',
        'F': 'B',
        'G': 'C',
        'H': 'D',
        'I': 'E'
      }
    });
  });

  it('should Depth-first search when dfs()', function () {
    let results = [];
    graphFinish.dfs( (r) => {
      results.push(r);
    });

    results.should.deepEqual(
      ['A', 'B', 'E', 'I', 'F', 'C', 'D', 'G', 'H']
    );
  });
});