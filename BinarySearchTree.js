function Node(val) {
  this.val = val;
  this.left = this.right = null;
}

function BinarySearchTree () {
  this.root = null;
}

BinarySearchTree.prototype.find = function(val) {
  var current = this.root;
  while (current) {
    if (val === current.val) return current;
    (val < current.val) ? current = current.left : current = current.right;
  }
  return false;
}

BinarySearchTree.prototype.addNode = function (val, node) {
  node = node || new Node(val);
  if (!this.root) {
    this.root = node;
    return;
  }
  var current = this.root;
  while (current) {
    if (current.val === val) return;
    if (val < current.val) {
      if (current.left) {
        current = current.left;
      } else {
        current.left = node;
        return;
      }
    }
    if (val > current.val) {
      if (current.right) {
        current = current.right;
      } else {
        current.right = node;
        return;
      }
    }
  }
}

BinarySearchTree.prototype.addNodeRecursive = function (val, current) {
  if (!val) return;
  if (!this.root) {
    this.root = new Node(val);
    return;
  }
  if (!current) current = this.root;
  if (current.val === val) return;
  if (val < current.val)
    current.left ? this.addNode(val, current.left) : current.left = new Node(val);
  if (val > current.val)
    current.right ? this.addNode(val, current.right) : current.right = new Node(val);
  return;
}

BinarySearchTree.prototype.min = function(current) {
  if (!this.root) return null;
  if (!current) current = this.root;
  while (current.left) current = current.left;
  return current.val;
}

BinarySearchTree.prototype.max = function(current) {
  if (!this.root) return null;
  if (!current) current = this.root;
  while (current.right) current = current.right;
  return current.val;
}

BinarySearchTree.prototype.removeNode = function(val, current) {
  if (!this.root) return null;
  if (this.root.val === val && !this.root.left && !this.root.right) {
    this.root = null;
    return;
  }
  if (!current) current = this.find(val);
  if (!current) return null;
  if (!current.left && !current.right) {
    current > previous ? previous.right = null : previous.left = null;
  } else if (!current.left) {
    current = current.right;
  } else if (!current.right) {
    current = current.left;
  } else {
    var replacement = this.max(current.left);
    current.val = replacement.val;
    this.removeNode(replacement.val, replacement);
  }
}

var bst = new BinarySearchTree();
bst.addNode(13);
bst.addNode(11);
bst.addNode(12);
bst.addNode(15);
bst.addNode(14);
bst.addNode(16);
bst.addNode(17);
bst.addNode(18);
bst.addNode(20);
bst.addNode(19);
bst.addNode(21);

