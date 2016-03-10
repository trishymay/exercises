function GraphNode (data) {
  this.data = data;
  this.frontChain = [];
  this.backChain = [];
}

function longestChain(array) {
  if (!array) throw new Error('Invalid Input');
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
var start = [[5,4], [6,2], [9,3], [2,5], [4,9]];