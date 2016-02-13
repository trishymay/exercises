function TreeNode (data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function checkSubtree (bigTreeRoot, smallTreeRoot) {
  if (!bigTreeRoot || !smallTreeRoot) throw new Error('Invalid Input');
  var result = findRoots(bigTreeRoot, smallTreeRoot);
  return result;
}

function findRoots (bigRoot, smallRoot) {
  if (!bigRoot) return;
  var left = findRoots(bigRoot.left, smallRoot);
  if (bigRoot.data === smallRoot.data) {
    var result = compare(bigRoot, smallRoot);
    if (result) return true;
  }
  var right = findRoots(bigRoot.right, smallRoot);
  if (left || right) return true;
  return false;
}

function compare (big, small) {
  if (!big && !small) return true;
  if (!big || !small) return false;
  var left = compare(big.left, small.left);
  if (big.data !== small.data) return false;
  var right = compare(big.right, small.right);
  if (!left || !right) return false;
  return true;
}

var root = new TreeNode(0);
root.left = new TreeNode(1);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(8);
root.left.right.left = new TreeNode(9);
root.left.right.right = new TreeNode(10);
root.right.left.left = new TreeNode(11);
root.right.left.right = new TreeNode(12);
root.right.right.left = new TreeNode(13);
root.right.right.right = new TreeNode(14);
root.right.right.right = new TreeNode(3);
root.right.right.right.right = new TreeNode(2);

//true
var root2 = new TreeNode(3);
root2.left = new TreeNode(7);
root2.right = new TreeNode(8);

//false
var root3 = new TreeNode(1);
root3.left = new TreeNode(3);
root3.right = new TreeNode(4);

//true
var root4 = new TreeNode(3);
root4.right = new TreeNode(2);

//false
var root5 = new TreeNode(3);

checkSubtree(root, root2);