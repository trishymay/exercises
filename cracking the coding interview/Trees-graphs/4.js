function TreeNode (data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function isBalanced (root, depth) {
  if (!root) return null;
  if (!depth) depth = 0;
  var left = isBalanced(root.left, depth + 1);
  var right = isBalanced(root.right, depth + 1);
  if (Math.abs(left - right) > 1) return false;
  if (left === false || right === false) return false;
  return depth ? Math.max(left, right) + 1 : true;
}

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.right = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.left.left = new TreeNode(6);
root.right.left.left.left = new TreeNode(7);
root.left.left = new TreeNode(8);
root.left.left.left = new TreeNode(9);
root.left.left.left.left = new TreeNode(10);

isBalanced(root);