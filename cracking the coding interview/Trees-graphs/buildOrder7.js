function DirectedGraphNode(val) {
  this.val = val;
  this.dependingOnMe = [];
  this.myDependencies = [];
}

function DirectedGraph() {
  this.nodes = [];
}

function buildGraph (vals, dependencies) {
  var graph = new DirectedGraph();
  var nodeIndexes = {};
  for (var i = 0; i < vals.length; i++) {
    graph.nodes.push(new DirectedGraphNode(vals[i]));
    nodeIndexes[vals[i]] = i;
  }
  for (var j = 0; j < dependencies.length; j++) {
    var project = graph.nodes[nodeIndexes[dependencies[j][0]]];
    var dependency = graph.nodes[nodeIndexes[dependencies[j][1]]];
    project.myDependencies.push(dependency);
    dependency.dependingOnMe.push(project);
  }
  return graph;
}

function buildOrder (vals, dependencies) {
  var graph = buildGraph(vals, dependencies);
  var totalNodesNum = graph.nodes.length;
  var buildOrder = [];
  var temp = []
  var lastTotal = 0;
  while (graph.nodes.length) {
    var current = graph.nodes.pop();
    if (!current.myDependencies.length) {
      buildOrder.push(current);
      for (var i = 0; i < current.dependingOnMe.length; i++) {
        var dependArray = current.dependingOnMe[i].myDependencies;
        var index = dependArray.indexOf(current);
        dependArray.splice(index, index + 1);
      }
    } else {
      temp.push(current);
    }
    if (!graph.nodes.length && buildOrder.length > lastTotal) {
      lastTotal = buildOrder.length;
      graph.nodes = temp;
      temp = [];
    }
  }
  return totalNodesNum === buildOrder.length ? buildOrder : false;
}

function printGraphDependencies (graph) {
  for (var i = 0; i < graph.nodes.length; i++) {
    var node = "";
    node += graph.nodes[i].val + " dependencies = ";
    if (!graph.nodes[i].myDependencies.length) {
      node += "none";
    }
    for (var j = 0; j < graph.nodes[i].myDependencies.length; j++) {
      node += graph.nodes[i].myDependencies[j].val + " "
    }
    console.log(node);
  }
}

function printBuildOrder (arr) {
  if (!arr) return false;
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i].val);
  }
  console.log(result);
}

var values = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencyArray = [['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']];
var dependencyArray2 = [['f', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']];
var graph = buildGraph(values, dependencyArray);
printGraphDependencies(graph);
var build = buildOrder(values, dependencyArray);
printBuildOrder(build);
