function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.each = function(f, node) {
  node = (node === undefined) ? this.root : node;
  if(!node) return;

  this.each(node.left);
  f(node.value);
  this.each(node.right);
};