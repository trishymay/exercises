function ListNode (val) {
  this.val = val;
  this.next = null;
}

function LinkedList () {
  this.head = null;
}

function sumLists (list1, list2) {
  if (!list1 || !list1.head || !list2 || !list2.head) return null;
  var num1 = "";
  var num2 = "";
  var sumNum;
  var current = list1.head;
  var result = new LinkedList;
  while (current) {
    num1 = current.val + num1;
    current = current.next;
  }
  current = list2.head;
  while (current) {
    num2 = current.val + num2;
    current = current.next;
  }
  sumNum = +num1 + +num2;
  sumNum = sumNum.toString();

  for (var i = sumNum.length - 1; i >= 0; i--){
    if (!result.head) {
      current = result.head = new ListNode(+sumNum[i]);
    } else {
      current.next = new ListNode(+sumNum[i]);
      current = current.next;
    }
  }
  return result;
}

var list1 = new LinkedList();
list1.head = new ListNode(7);
list1.head.next = new ListNode(1);
list1.head.next.next = new ListNode(6);

var list2 = new LinkedList();
list2.head = new ListNode(5);
list2.head.next = new ListNode(9);
list2.head.next.next = new ListNode(2);


