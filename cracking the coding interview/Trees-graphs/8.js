function Node (data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function firstCommonAncestor(root, node1, node2) {
  if (!root || !node1 || !node2) throw new Error('Invalid Input');
  if (node1 === root || node2 === root) throw new Error('Root has no Ancestor');
  findNodes(root, node1, node2, 0);
  if (!node1.found || !node2.found) {
    cleanTree(root);
    throw new Error('Tree did not contain both nodes');
  }
  while (true) {
    if (node1.depth === node2.depth) {
      node1 = node1.parent;
      node2 = node2.parent;
      if (node1 === node2) {
        cleanTree(root);
        return node1;
      }
    } else if (node1.depth < node2.depth) {
      node2 = node2.parent;
    } else {
      node1 = node1.parent;
    }
  }
}

function findNodes(root, node1, node2, depth) {
  if (!root || !node1 || !node2) return null;
  if (node1.found && node2.found) return;
  findNodes(root.left, node1, node2, depth + 1);
  root.depth = depth
  if (root.left) root.left.parent = root;
  if (root.right) root.right.parent = root;
  if (root === node1) node1.found = true;
  if (root === node2) node2.found = true;
  findNodes(root.right, node1, node2, depth + 1);
}

function cleanTree (root) {
  if (!root) return;
  cleanTree(root.left);
  delete root.depth;
  delete root.parent;
  delete root.found;
  cleanTree(root.right);
}

var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.right = new Node(4);
root.right.left = new Node(5);
root.right.left.left = new Node(6);
root.right.left.left.left = new Node(7);
root.left.left = new Node(8);
root.left.left.left = new Node(9);
root.left.left.left.left = new Node(10);
root.left.left.left.left.right = new Node(11);

firstCommonAncestor(root, root.left, root.right);

