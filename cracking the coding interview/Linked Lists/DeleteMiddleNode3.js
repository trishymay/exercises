function ListNode (val) {
  this.val = val;
  this.next = null;
}

function LinkedList () {
  this.head = null;
}

function deleteMidNode (node) {
  if (!node || !node.next) return false;
  node.val = node.next.val;
  node.next = node.next.next;
}

var head = new ListNode (1);
head.next = new ListNode (2);
head.next.next = new ListNode (3);