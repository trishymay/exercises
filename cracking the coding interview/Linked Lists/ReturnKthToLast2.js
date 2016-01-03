function ListNode (val) {
  this.val = val;
  this.next = null;
}

function LinkedList () {
  this.head = null;
}

function returnKthToLast (list, k) {
  if (!list || !list.head) return null;
  var kth = list.head;
  var last = list.head;
  for (var i = 0; i < k; i++) {
    if (last.next) {
      last = last.next;
    } else {
      return null;
    }
  }
  while (last.next) {
    last = last.next;
    kth = kth.next;
  }
  return kth;
}


var list = new LinkedList();
list.head = new ListNode(1);
list.head.next = new ListNode(2);
list.head.next.next = new ListNode(3);
list.head.next.next.next = new ListNode(4);
list.head.next.next.next.next = new ListNode(5);
list.head.next.next.next.next.next = new ListNode(6);
list.head.next.next.next.next.next.next = new ListNode(7);
list.head.next.next.next.next.next.next.next = new ListNode(8);
list.head.next.next.next.next.next.next.next.next = new ListNode(9);
list.head.next.next.next.next.next.next.next.next.next = new ListNode(10);
list.head.next.next.next.next.next.next.next.next.next.next = new ListNode(11);