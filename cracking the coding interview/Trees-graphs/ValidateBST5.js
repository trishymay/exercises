function BinaryTree() {
  this.root = null;
}

function BinaryNode(val) {
 this.val = val;
 this.left = this.right = null;
}

function validateBST (binarySearchTree) {
  if (!binarySearchTree || !binarySearchTree.root) return;
  var result = traverse(binarySearchTree.root);
  return result;
}

function traverse (node) {
  if (!node) return true;
  if (traverse(node.left) === false) return false;
  if (node.left && node.left.val > node.val) return false
  if (node.right && node.right.val < node.val) return false
  if (traverse(node.right) === false) return false;
  return true;
}

var notBST = new BinaryTree();
notBST.root = new BinaryNode(1);
notBST.root.left = new BinaryNode(2);
notBST.root.right = new BinaryNode(3);
notBST.root.left.left = new BinaryNode(4);
notBST.root.left.right = new BinaryNode(5);
notBST.root.right.left = new BinaryNode(6);
notBST.root.right.right = new BinaryNode(7);

var bst = new BinaryTree();
bst.root = new BinaryNode(4);
bst.root.left = new BinaryNode(2);
bst.root.right = new BinaryNode(6);
bst.root.left.left = new BinaryNode(1);
bst.root.left.right = new BinaryNode(3);
bst.root.right.left = new BinaryNode(5);
bst.root.right.right = new BinaryNode(7);
bst.root.right.right.right = new BinaryNode(8);
