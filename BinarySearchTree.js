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
    current = val < current.val ? current.left : current.right;
  }
  return false;
}

BinarySearchTree.prototype.findParent = function(node) {
  var current = this.root;
  while (current) {
    if ((node === current.left) || (node === current.right)) {
      return current;
    }
    current = node.val <= current.val ? current.left : current.right;
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

BinarySearchTree.prototype.min = function(node) {
  if (!this.root) return null;
  if (!node) node = this.root;
  while (node.left) node = node.left;
  return node;
}

BinarySearchTree.prototype.max = function(node) {
  if (!this.root) return null;
  if (!node) node = this.root;
  while (node.right) node = node.right;
  return node;
}

BinarySearchTree.prototype.removeNode = function(val) {
  if (!this.root || !val) return null;
  var current = this.find(val);
  if (!current) return null;
  var replacement;
  var parent;
  while (current.left || current.right) {
    if (current.right && current.left) {
      replacement = this.max(current.left);
      current.val = replacement.val;
    } else if (current.left) {
      replacement = current.left;
      current.val = replacement.val;
      current.right = replacement.right;
      current.left = replacement.left;
      return;
    } else {
      replacement = current.right;
      current.val = replacement.val;
      current.right = replacement.right;
      current.left = replacement.left;
      return;
    }
    current = replacement;
  }
  parent = this.findParent(current);
  if (!parent) {
    this.root = null;
  } else {
    if (parent.right === current) {
      parent.right = null;
    } else {
      parent.left = null;
    }
  }
}

var bst = new BinarySearchTree();
bst.addNode(30);
bst.addNode(20);
bst.addNode(45);
bst.addNode(10);
bst.addNode(25);
bst.addNode(35);
bst.addNode(55);
bst.addNode(5);
bst.addNode(15);
bst.addNode(24);
bst.addNode(26);
bst.addNode(33);
bst.addNode(40);
bst.addNode(50);
bst.addNode(65);

