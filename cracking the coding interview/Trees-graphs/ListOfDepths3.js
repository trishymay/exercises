function BinaryTree () {
  this.root = null;
}

function BinaryNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function LinkedList () {
  this.head = null;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function depthLists(tree) {
  if (!tree || !tree.root) return null;
  var currentLevel = [tree.root];
  var nextLevel = [];
  var result = [];
  while (currentLevel.length) {
    var linkedList = new LinkedList();
    var currentNode = linkedList.head = new ListNode(currentLevel[0].val);
    result.push(linkedList);
    for (var i = 0; i < currentLevel.length; i++) {
      if (currentLevel[i].left) nextLevel.push(currentLevel[i].left);
      if (currentLevel[i].right) nextLevel.push(currentLevel[i].right);
      if (currentLevel[i + 1]) {
        currentNode.next = new ListNode(currentLevel[i + 1].val);
        currentNode = currentNode.next;
      }
    }
    currentLevel = nextLevel;
    nextLevel = [];
  }
  return result;
}

var tree = new BinaryTree();
tree.root = new BinaryNode(1);
tree.root.left = new BinaryNode(2);
tree.root.right = new BinaryNode(3);
tree.root.left.left = new BinaryNode(4);
tree.root.left.right = new BinaryNode(5);
tree.root.right.left = new BinaryNode(6);
tree.root.right.right = new BinaryNode(7);

function toString (array) {
  for (var i = 0; i < array.length; i++) {
    var current = array[i].head;
    var string = "";
    while (current.next) {
      string += current.val + ", ";
      current = current.next;
    }
    string += current.val;
    console.log(string);
  }
}

var lists = depthLists(tree);
