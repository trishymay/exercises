function ListNode (val) {
  this.val = val;
  this.next = null;
}

function LinkedList () {
  this.head = null;
}

function palindrome (list) {
  if (!list || !list.head) return false;
  var arr = [];
  var current = list.head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  for (var i = 0; i < arr.length/2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }
  return true;
}

var pal = new LinkedList();
pal.head = new ListNode(11);
pal.head.next = new ListNode(10);
pal.head.next.next = new ListNode(9);
pal.head.next.next.next = new ListNode(8);
pal.head.next.next.next.next = new ListNode(9);
pal.head.next.next.next.next.next = new ListNode(10);
pal.head.next.next.next.next.next.next = new ListNode(11);

var pal1 = new LinkedList();
pal1.head = new ListNode(11);
pal1.head.next = new ListNode(10);
pal1.head.next.next = new ListNode(9);
pal1.head.next.next.next = new ListNode(9);
pal1.head.next.next.next.next = new ListNode(10);
pal1.head.next.next.next.next.next = new ListNode(11);

var list = new LinkedList();
list.head = new ListNode(11);
list.head.next = new ListNode(10);
list.head.next.next = new ListNode(9);
list.head.next.next.next = new ListNode(8);
list.head.next.next.next.next = new ListNode(7);
list.head.next.next.next.next.next = new ListNode(10);
list.head.next.next.next.next.next.next = new ListNode(11);