function Node (data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function bstSequences (root) {
  var result = [];
  helper(root, [], [], result);
  return result;
}

function helper (root, currArr, queue, resultArr) {
  if (!root) return;
  currArr.push(root.data);
  queue.push(root.left, root.right);
  for (var i = 0; i < queue.length; i++) {
    var currQ = queue.slice();
    var current = currQ[i];
    currQ[i] = null;
    helper(current, currArr.slice(), currQ, resultArr)
  }
  if (!resultArr.length) resultArr.push(currArr);
  else if (currArr.length > resultArr[0].length) currArr = resultArr;
  else if (currArr.length === resultArr[0].length) resultArr.push(currArr);
}

var root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);
root.right.right = new Node(4);
root.left.left = new Node(0);

bstSequences(root);