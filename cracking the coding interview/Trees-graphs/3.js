function ListNode (data) {
  this.data = data;
  this.next = null;
}

function TreeNode (data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function listOfDepths (treeRoot) {
  if (!root) throw new Error("Invalid Input");
  var result = [];
  var currLevel = [treeRoot];
  while (currLevel.length) {
    var nextLevel = [];
    var previous = null;
    while (currLevel.length) {
      var current = currLevel.shift();
      if (current.left) nextLevel.push(current.left);
      if (current.right) nextLevel.push(current.right);
      current = new ListNode(current.data);
      !previous ? result.push(current) : previous.next = current;
      previous = current;
    }
    currLevel = nextLevel;
  }
  return result;
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

var arr = listOfDepths(root);

