function TreeNode (data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function isBST (node) {
  if (!node) return;
  if (!node.min) node.min = -Infinity;
  if (!node.max) node.max = Infinity;
  if (node.left) {
    node.left.max = node.data;
    node.left.min = node.min;
  }
  if (node.right) {
    node.right.min = node.data;
    node.right.max = node.max;
  }
  var left = isBST(node.left);
  if (left === false) return false;
  if (node.left && node.left.data > node.data) return false;
  if (node.right && node.right.data <= node.data) return false;
  if (node.data > node.max || node.data <= node.min) return false;
  var right = isBST(node.right, f);
  if (right === false) return false;
  return true;
}

var root = new TreeNode(5);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.right.right = new TreeNode(8);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(4);

var bad = new TreeNode(7);
bad.left = new TreeNode(5);
bad.right = new TreeNode(10);
bad.left.right = new TreeNode(8);

var a = isBST(root);
var b = isBST(bad);