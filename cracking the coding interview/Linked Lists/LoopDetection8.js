function ListNode (val) {
  this.val = val;
  this.next = null;
}

function LinkedList () {
  this.head = null;
}

function loopDetection (list) {
  if (!list || !list.head) return false;
  var current = list.head;
  var flag = Date.now();
  while (current) {
    if (current.flag === flag) {
      return current;
    } else {
      current.flag = flag;
      current = current.next;
    }
  }
  return false;
}

var eleven = new ListNode(11);
var ten = new ListNode(10);
var nine = new ListNode(9);
var eight = new ListNode(8);
var list = new LinkedList();
list.head = eleven;
eleven.next = ten;
ten.next = nine;
nine.next = eight;
eight.next = ten;
