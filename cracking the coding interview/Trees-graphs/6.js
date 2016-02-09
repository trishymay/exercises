function TreeNode (data) {
  this.data = data;
  this.left = null;
  this.right = null;
  this.parent = null;
}

function successor (node) {
  if (!node || !node.parent && !node.right) return null;
  var current = node;
  if (current.right) {
    current = current.right;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  while (current.parent.right === current) {
    current = current.parent;
    if (!current.parent) return null;
  }
  if (current.parent.left === current) return current.parent;
}

var root = new TreeNode(8);
root.left = new TreeNode(2);
root.left.parent = root;
root.left.left = new TreeNode(1);
root.left.left.parent = root.left;
root.left.right = new TreeNode(6);
root.left.right.parent = root.left;
root.left.right.right = new TreeNode(7);
root.left.right.right.parent = root.left.right;
root.left.right.left = new TreeNode(4);
root.left.right.left.parent = root.left.right;
root.left.right.left.left = new TreeNode(3);
root.left.right.left.left.parent = root.left.right.left;
root.left.right.left.right = new TreeNode(5);
root.left.right.left.right.parent = root.left.right.left;
root.right = new TreeNode(9);
root.right.parent = root;

successor(root);
