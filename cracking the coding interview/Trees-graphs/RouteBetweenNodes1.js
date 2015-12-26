function DirectedGraphNode(val) {
  this.val = val;
  this.neighbors = [];
}

function DirectedGraph() {
  this.nodes = [];
}

DirectedGraph.prototype.addNode = function (val) {
  this.nodes.push(new DirectedGraphNode(val));
}

DirectedGraph.prototype.removeNode = function (node) {
  var index = this.nodes.indexOf(node);
  if (index === -1) return;
  this.nodes.splice(index, 1);
  for (var i = 0; i < this.nodes.length; i++) {
    index = this.nodes[i].neighbors.indexOf(node);
    if (index >= 0) this.nodes[i].neighbors.splice(index, 1);
  }
}

DirectedGraph.prototype.addPointer = function (nodeFrom, nodeTo) {
  if (nodeFrom.neighbors.indexOf(nodeTo) === -1)
    nodeFrom.neighbors.push(nodeTo);
}

DirectedGraph.prototype.removePointer = function (nodeFrom, nodeTo) {
  if (nodeFrom.neighbors.indexOf(nodeTo) >= 0)tr
    nodeFrom.neighbors.push(nodeTo);
}

DirectedGraph.prototype.getNeighbors = function () {
  var neighborsList = "";
  for (var j = 0; j < this.nodes.length; j++) {
    var values = [this.nodes[j].val + " ---> "];
    for (var i = 0; i < this.nodes[j].neighbors.length; i++) {
      values.push(this.nodes[j].neighbors[i].val);
    }
    neighborsList += values.join() + "\n";
  }
  return neighborsList;
}

//depth first
DirectedGraph.prototype.hasPath = function (node1, node2, hash) {
  var result = false;
  var seen = hash || {};
  for (var i = 0; i < node1.neighbors.length; i++) {
    if (node1.neighbors[i] === node2) return true;
    if (!seen[node1.neighbors[i].val]) {
      seen[node1.neighbors[i].val] = node1.neighbors[i];
      result = this.hasPath(node1.neighbors[i], node2, seen);
      if (result) return result;
    }
  }
  return result;
}

//breadth first
DirectedGraph.prototype.hasPathBreadth = function (node1, node2) {
  var queue = node1.neighbors;
  var current;
  var marker = Date.now();
  while (queue.length) {
    current = queue.shift();
    if (current.seen === marker) continue;
    if (current === node2) return true;
    current.seen = marker;
    queue = queue.concat(current.neighbors);
  }
  return false;
}

var graph = new DirectedGraph();
graph.addNode('a');
graph.addNode('b');
graph.addNode('c');
graph.addNode('d');
graph.addNode('e');
graph.addNode('f');
graph.addNode('g');
graph.addNode('h');
graph.addNode('i');

graph.addPointer(graph.nodes[0], graph.nodes[5]);
graph.addPointer(graph.nodes[1], graph.nodes[5]);
graph.addPointer(graph.nodes[2], graph.nodes[1]);
graph.addPointer(graph.nodes[2], graph.nodes[0]);
graph.addPointer(graph.nodes[3], graph.nodes[0]);
graph.addPointer(graph.nodes[4], graph.nodes[3]);
graph.addPointer(graph.nodes[5], graph.nodes[2]);
graph.addPointer(graph.nodes[5], graph.nodes[4]);
graph.addPointer(graph.nodes[5], graph.nodes[6]);
graph.addPointer(graph.nodes[6], graph.nodes[7]);
graph.addPointer(graph.nodes[7], graph.nodes[6]);
graph.addPointer(graph.nodes[7], graph.nodes[8]);

console.time("breadth");
graph.hasPathBreadth(graph.nodes[0], graph.nodes[3]);
console.timeEnd("breadth");

console.time("depth");
graph.hasPath(graph.nodes[0], graph.nodes[3]);
console.timeEnd("depth");

