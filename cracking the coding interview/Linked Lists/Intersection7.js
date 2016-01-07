function ListNode (val) {
  this.val = val;
  this.next = null;
}

function LinkedList () {
  this.head = null;
}

function intersection (list1, list2) {
  if (!list1 || !list1.head || !list2 || !list2.head) return false;
  var current1 = list1.head;
  var current2 = list2.head
  var flag = Date.now();
  while (current1 || current2) {
    if (current1) {
      if (current1.flag === flag) {
        return current1;
      } else {
        current1.flag = flag;
        current1 = current1.next;
      }
    }
    if (current2) {
      if (current2.flag === flag) {
        return current2;
      } else {
        current2.flag = flag;
        current2 = current2.next;
      }
    }
  }
  return false;
}

var eleven = new ListNode(11);
var anotherEleven = new ListNode(11);
var ten = new ListNode(10);
var nine = new ListNode(9);
var eight = new ListNode(8);
var seven = new ListNode(7);
var six = new ListNode(6);
var five = new ListNode(5);
var four = new ListNode(4);
var yetAnotherEleven = new ListNode(11);

var list = new LinkedList();
list.head = eleven;
eleven.next = anotherEleven;
anotherEleven.next = yetAnotherEleven;

var list2 = new LinkedList();
list2.head = ten;
ten.next = nine;
nine.next = eight;
eight.next = seven;

var list3 = new LinkedList();
list3.head = six;
six.next = five;
five.next = eight;

var list4 = new LinkedList();
list4.head = four;
four.next = anotherEleven;
