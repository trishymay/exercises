var reverseList = function(head) {
  if (!head || !head.next) return head;
  if (head.next.next === null) {
    var newHead = head.next;
    head.next.next = head;
    head.next = null;
    return newHead;
  } else {
    var previousNode = head;
    var currentNode = head.next;
    var nextNode = head.next.next;
    while (currentNode.next !== null) {
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
      nextNode = nextNode.next;
    }
    head.next = null;
    currentNode.next = previousNode;
    return currentNode;
  }
};