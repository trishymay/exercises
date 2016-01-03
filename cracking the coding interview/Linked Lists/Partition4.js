function ListNode (val) {
  this.val = val;
  this.next = null;
}

function LinkedList () {
  this.head = null;
}

function partition (list, partVal) {
  if (!list || !list.head || !partVal) return null;
  var current = list.head;
  var leftHead;
  var leftTail;
  var rightHead;
  var rightTail;
  while (current) {
    if (current.val < partVal) {
      if (!leftHead) {
        leftHead = current;
      } else {
        leftTail.next = current;
      }
      leftTail = current;
    } else {
      if (!rightHead) {
        rightHead = current;
      } else {
        rightTail.next = current;
      }
      rightTail = current;
    }
    current = current.next;
  }
  list.head = leftHead;
  leftTail.next = rightHead;
  rightTail.next = null;
  return list;
}

function print (list) {
  var current = list.head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

var list = new LinkedList();
list.head = new ListNode(11);
list.head.next = new ListNode(10);
list.head.next.next = new ListNode(9);
list.head.next.next.next = new ListNode(8);
list.head.next.next.next.next = new ListNode(5);
list.head.next.next.next.next.next = new ListNode(6);
list.head.next.next.next.next.next.next = new ListNode(7);
list.head.next.next.next.next.next.next.next = new ListNode(1);
list.head.next.next.next.next.next.next.next.next = new ListNode(3);
list.head.next.next.next.next.next.next.next.next.next = new ListNode(2);
list.head.next.next.next.next.next.next.next.next.next.next = new ListNode(17);