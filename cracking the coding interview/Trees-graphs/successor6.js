function BinaryTree() {
  this.root = null;
}

function BinaryNode(val) {
 this.val = val;
 this.left = this.right = this.parent = null;
}

function successor (node) {
  if (!node) return null;
  if (!node.right && !node.parent) return null;
  var current;
  if (node.right) {
    current = node.right;
    while (current.left) {
      current = current.left;
    }
    return current;
  } else {
    current = node;
    while (current.parent.right === current) {
      current = current.parent;
      if (!current.parent) return null;
    }
    return current.parent;
  }
}

var bst = new BinaryTree();
bst.root = new BinaryNode(4);
bst.root.left = new BinaryNode(2);
bst.root.left.parent = bst.root;
bst.root.right = new BinaryNode(6);
bst.root.right.parent = bst.root;
bst.root.left.left = new BinaryNode(1);
bst.root.left.left.parent = bst.root.left;
bst.root.left.right = new BinaryNode(3);
bst.root.left.right.parent = bst.root.left;
bst.root.right.left = new BinaryNode(5);
bst.root.right.left.parent = bst.root.right;
bst.root.right.right = new BinaryNode(7);
bst.root.right.right.parent = bst.root.right;
bst.root.right.right.right = new BinaryNode(8);
bst.root.right.right.right.parent = bst.root.right.right;
var one = bst.root.left.left
var two = bst.root.left
var three = bst.root.left.right
var four = bst.root
var five = bst.root.right.left
var six = bst.root.right
var seven = bst.root.right.right
var eight = bst.root.right.right.right