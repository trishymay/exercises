function Graph () {
  this.nodes = [];
}

function Node (data) {
  this.data = data;
  this.neighbors = [];
}

function hasPath (graph, node1, node2) {
  if (!graph || !node1 || !node2) throw new Error('Invalid Input');
  var queue = [].concat(node1.neighbors);
  graph.nodes.forEach(function(node) {
    node.seen = false;
  });
  while (queue.length) {
    var current = queue.shift();
    if (current.seen) continue;
    if (current === node2) return true;
    current.seen = true;
    queue = queue.concat(current.neighbors);
  }
  return false;
}


var graph = new Graph();
graph.nodes.push(new Node(0));
graph.nodes.push(new Node(1));
graph.nodes.push(new Node(2));
graph.nodes.push(new Node(3));
graph.nodes.push(new Node(4));
graph.nodes.push(new Node(5));
graph.nodes.push(new Node(6));
graph.nodes[0].neighbors = [graph.nodes[1]];
graph.nodes[1].neighbors = [graph.nodes[4], graph.nodes[5]];
graph.nodes[2].neighbors = [graph.nodes[5]];
graph.nodes[4].neighbors = [graph.nodes[1]];
graph.nodes[5].neighbors = [graph.nodes[6]];
graph.nodes[6].neighbors = [graph.nodes[3]];

hasPath(graph, graph.nodes[0], graph.nodes[3]);

