function BinaryTree () {
  this.root = null;
}

function BinaryNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function checkBalanced (binaryTree) {
  if (!binaryTree || !binaryTree.root) return;
  var queue = [binaryTree.root];
  var current;
  while(queue.length) {
    current = queue.shift();
    if (current.left && current.right) {
      queue.push(current.left, current.right);
    } else if (!current.left && current.right) {
      if (current.right.left || current.right.right) return false;
    } else if (!current.right && current.left) {
      if (current.left.left || current.left.right) return false;
    }
  }
  return true;
}

function checkBalancedRecursive (tree) {
  if (!tree || !tree.root) return;
  function height(node) {
    if (!node) return 0;
    var leftValue = height(node.left) + 1;
    var rightValue = height(node.right) + 1;
    if (!leftValue || !rightValue) return -1;
    var difference = Math.abs(leftValue - rightValue);
    return difference > 1 ? -1 : Math.max(leftValue, rightValue);
  }
  var result = height(tree.root);
  if (result === -1) return false;
  return true;
}

var balanced = new BinaryTree();
balanced.root = new BinaryNode(1);
balanced.root.left = new BinaryNode(2);
balanced.root.right = new BinaryNode(3);
balanced.root.left.left = new BinaryNode(4);
balanced.root.left.right = new BinaryNode(5);
balanced.root.right.left = new BinaryNode(6);
balanced.root.right.right = new BinaryNode(7);

var unbalanced = new BinaryTree();
unbalanced.root = new BinaryNode(1);
unbalanced.root.left = new BinaryNode(2);
unbalanced.root.right = new BinaryNode(3);
unbalanced.root.left.left = new BinaryNode(4);
unbalanced.root.left.right = new BinaryNode(5);
unbalanced.root.right.left = new BinaryNode(6);
unbalanced.root.right.left.right = new BinaryNode(7);

