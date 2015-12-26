function minDepth (numberOfNodes) {
  var currentDepth = 0;
  var nodesForDepth = 0;
  while (nodesForDepth < numberOfNodes) {
    currentDepth++;
    nodesForDepth = Math.pow(2, currentDepth) - 1;
  }
  return currentDepth;
}

function BinaryTreeNode(value) {
 this.value = value;
 this.left = null;
 this.right = null;
}

function minBinarySearchTree (valsArray) {
  if (!valsArray.length) return null;
  var length = valsArray.length;
  var midIndex = Math.floor(length/2);
  var root = new BinaryTreeNode(valsArray[midIndex]);
  root.left = minBinarySearchTree(valsArray.slice(0, midIndex));
  root.right = minBinarySearchTree(valsArray.slice(midIndex + 1, length));
  return root;
}

var arr = [1, 2, 3, 4, 5];

var root = minBinarySearchTree(arr);