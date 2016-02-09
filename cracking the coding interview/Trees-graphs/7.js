function GraphNode (data) {
  this.data = data;
  this.dependencies = 0;
  this.nextInLine = [];
}

function buildOrder (projects, dependencyList) {
  if (!projects || !dependencyList) throw new Error('Invalid Input');
  var graphNodes = {};
  for (var i = 0; i < projects.length; i++) {
    graphNodes[projects[i]] = new GraphNode(projects[i]);
  }
  for (var j = 0; j < dependencyList.length; j++) {
    var dependent = dependencyList[j][0];
    var dependency = dependencyList[j][1];
    graphNodes[dependent].dependencies++;
    graphNodes[dependency].nextInLine.push(graphNodes[dependent]);
  }
  var listToCheck = Object.keys(graphNodes);
  var completed = {};
  while (listToCheck.length) {
    var current = graphNodes[listToCheck.pop()];
    if (!current.dependencies && !completed[current.data]) {
      completed[current.data] = true;
      for (var k = 0; k < current.nextInLine.length; k++) {
        current.nextInLine[k].dependencies--;
        if (!current.nextInLine[k].dependencies) {
          listToCheck.push(current.nextInLine[k].data);
        }
      }
    }
  }
  if (Object.keys(completed).length === projects.length) return Object.keys(completed);
  throw new Error('No valid build order');
}

var projects = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencyList1 = [['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']];
var dependencyList2 = [['f', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'e'], ['c', 'd']];
var dependencyList3 = [['f', 'a'], ['b', 'e'], ['d', 'b'], ['a', 'f'], ['c', 'd']];

buildOrder(projects, dependencyList1);