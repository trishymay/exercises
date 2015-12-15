function Node (data) {
  this.val = data;
  this.next = null;
}

var hasCycle = function(head) {
  if (!head) return false;
  while (head.next) {
    if (head.tag) return true;
    head.tag = true;
    head = head.next;
  }
  return false;
};

var hasCycle = function(head) {
  if (!head) return false;
  var fastPointer = head;
  var slowPointer = head;
  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next ;
    if (fastPointer === slowPointer) return true;
  }
  return false;
};